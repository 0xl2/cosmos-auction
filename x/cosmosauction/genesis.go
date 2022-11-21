package cosmosauction

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/keeper"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

// InitGenesis initializes the module's state from a provided genesis state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the auctionBider
	for _, elem := range genState.AuctionBiderList {
		k.SetAuctionBider(ctx, elem)
	}
	// Set all the auctionWinner
	for _, elem := range genState.AuctionWinnerList {
		k.SetAuctionWinner(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the module's exported genesis
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.AuctionBiderList = k.GetAllAuctionBider(ctx)
	genesis.AuctionWinnerList = k.GetAllAuctionWinner(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
