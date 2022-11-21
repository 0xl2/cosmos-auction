package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/naruto0913/cosmos-auction/testutil/keeper"
	"github.com/naruto0913/cosmos-auction/testutil/nullify"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/keeper"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNAuctionWinner(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.AuctionWinner {
	items := make([]types.AuctionWinner, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetAuctionWinner(ctx, items[i])
	}
	return items
}

func TestAuctionWinnerGet(t *testing.T) {
	keeper, ctx := keepertest.CosmosauctionKeeper(t)
	items := createNAuctionWinner(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetAuctionWinner(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestAuctionWinnerRemove(t *testing.T) {
	keeper, ctx := keepertest.CosmosauctionKeeper(t)
	items := createNAuctionWinner(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveAuctionWinner(ctx,
			item.Index,
		)
		_, found := keeper.GetAuctionWinner(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestAuctionWinnerGetAll(t *testing.T) {
	keeper, ctx := keepertest.CosmosauctionKeeper(t)
	items := createNAuctionWinner(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllAuctionWinner(ctx)),
	)
}
