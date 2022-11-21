package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

func (k msgServer) AuctionBid(goCtx context.Context, msg *types.MsgAuctionBid) (*types.MsgAuctionBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgAuctionBidResponse{}, nil
}
