package cosmosauction

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
	"github.com/naruto0913/cosmos-auction/testutil/sample"
	cosmosauctionsimulation "github.com/naruto0913/cosmos-auction/x/cosmosauction/simulation"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = cosmosauctionsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgCreateAuction = "op_weight_msg_create_auction"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateAuction int = 100

	opWeightMsgAuctionBid = "op_weight_msg_auction_bid"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAuctionBid int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	cosmosauctionGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&cosmosauctionGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateAuction int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateAuction, &weightMsgCreateAuction, nil,
		func(_ *rand.Rand) {
			weightMsgCreateAuction = defaultWeightMsgCreateAuction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateAuction,
		cosmosauctionsimulation.SimulateMsgCreateAuction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAuctionBid int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAuctionBid, &weightMsgAuctionBid, nil,
		func(_ *rand.Rand) {
			weightMsgAuctionBid = defaultWeightMsgAuctionBid
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAuctionBid,
		cosmosauctionsimulation.SimulateMsgAuctionBid(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
