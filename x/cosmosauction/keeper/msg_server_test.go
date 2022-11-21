package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/naruto0913/cosmos-auction/testutil/keeper"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/keeper"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CosmosauctionKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
