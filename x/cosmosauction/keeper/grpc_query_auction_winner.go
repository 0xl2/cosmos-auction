package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AuctionWinnerAll(c context.Context, req *types.QueryAllAuctionWinnerRequest) (*types.QueryAllAuctionWinnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var auctionWinners []types.AuctionWinner
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	auctionWinnerStore := prefix.NewStore(store, types.KeyPrefix(types.AuctionWinnerKeyPrefix))

	pageRes, err := query.Paginate(auctionWinnerStore, req.Pagination, func(key []byte, value []byte) error {
		var auctionWinner types.AuctionWinner
		if err := k.cdc.Unmarshal(value, &auctionWinner); err != nil {
			return err
		}

		auctionWinners = append(auctionWinners, auctionWinner)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAuctionWinnerResponse{AuctionWinner: auctionWinners, Pagination: pageRes}, nil
}

func (k Keeper) AuctionWinner(c context.Context, req *types.QueryGetAuctionWinnerRequest) (*types.QueryGetAuctionWinnerResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAuctionWinner(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetAuctionWinnerResponse{AuctionWinner: val}, nil
}
