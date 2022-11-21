package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

func (k msgServer) CreateBid(goCtx context.Context, msg *types.MsgCreateBid) (*types.MsgCreateBidResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateBidResponse{}, nil
}
