package keeper_test

import (
	"testing"

	testkeeper "github.com/naruto0913/cosmos-auction/testutil/keeper"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.CosmosauctionKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
