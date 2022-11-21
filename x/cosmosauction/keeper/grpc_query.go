package keeper

import (
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

var _ types.QueryServer = Keeper{}
