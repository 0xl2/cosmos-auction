package cosmosauction_test

import (
	"testing"

	keepertest "github.com/naruto0913/cosmos-auction/testutil/keeper"
	"github.com/naruto0913/cosmos-auction/testutil/nullify"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		
	// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CosmosauctionKeeper(t)
	cosmosauction.InitGenesis(ctx, *k, genesisState)
	got := cosmosauction.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)
	
// this line is used by starport scaffolding # genesis/test/assert
}
