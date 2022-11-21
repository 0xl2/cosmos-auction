package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/naruto0913/cosmos-auction/testutil/keeper"
	"github.com/naruto0913/cosmos-auction/testutil/nullify"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestAuctionBiderQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.CosmosauctionKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAuctionBider(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetAuctionBiderRequest
		response *types.QueryGetAuctionBiderResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetAuctionBiderRequest{
				Index: msgs[0].Index,
			},
			response: &types.QueryGetAuctionBiderResponse{AuctionBider: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetAuctionBiderRequest{
				Index: msgs[1].Index,
			},
			response: &types.QueryGetAuctionBiderResponse{AuctionBider: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetAuctionBiderRequest{
				Index: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.AuctionBider(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestAuctionBiderQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.CosmosauctionKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNAuctionBider(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllAuctionBiderRequest {
		return &types.QueryAllAuctionBiderRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AuctionBiderAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.AuctionBider), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.AuctionBider),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.AuctionBiderAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.AuctionBider), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.AuctionBider),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.AuctionBiderAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.AuctionBider),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.AuctionBiderAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
