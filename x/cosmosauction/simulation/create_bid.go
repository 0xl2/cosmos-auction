package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/keeper"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

func SimulateMsgCreateBid(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgCreateBid{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the CreateBid simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "CreateBid simulation not implemented"), nil, nil
	}
}
