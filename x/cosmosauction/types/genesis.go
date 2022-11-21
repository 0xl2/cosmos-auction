package types

import (
	"fmt"
)

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		AuctionBiderList:  []AuctionBider{},
		AuctionWinnerList: []AuctionWinner{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated index in auctionBider
	auctionBiderIndexMap := make(map[string]struct{})

	for _, elem := range gs.AuctionBiderList {
		index := string(AuctionBiderKey(elem.Index))
		if _, ok := auctionBiderIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for auctionBider")
		}
		auctionBiderIndexMap[index] = struct{}{}
	}
	// Check for duplicated index in auctionWinner
	auctionWinnerIndexMap := make(map[string]struct{})

	for _, elem := range gs.AuctionWinnerList {
		index := string(AuctionWinnerKey(elem.Index))
		if _, ok := auctionWinnerIndexMap[index]; ok {
			return fmt.Errorf("duplicated index for auctionWinner")
		}
		auctionWinnerIndexMap[index] = struct{}{}
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
