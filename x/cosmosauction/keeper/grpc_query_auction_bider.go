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

func (k Keeper) AuctionBiderAll(c context.Context, req *types.QueryAllAuctionBiderRequest) (*types.QueryAllAuctionBiderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var auctionBiders []types.AuctionBider
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	auctionBiderStore := prefix.NewStore(store, types.KeyPrefix(types.AuctionBiderKeyPrefix))

	pageRes, err := query.Paginate(auctionBiderStore, req.Pagination, func(key []byte, value []byte) error {
		var auctionBider types.AuctionBider
		if err := k.cdc.Unmarshal(value, &auctionBider); err != nil {
			return err
		}

		auctionBiders = append(auctionBiders, auctionBider)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllAuctionBiderResponse{AuctionBider: auctionBiders, Pagination: pageRes}, nil
}

func (k Keeper) AuctionBider(c context.Context, req *types.QueryGetAuctionBiderRequest) (*types.QueryGetAuctionBiderResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetAuctionBider(
		ctx,
		req.Index,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetAuctionBiderResponse{AuctionBider: val}, nil
}
