package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/cosmosauction module sentinel errors
var (
	ErrSample = sdkerrors.Register(ModuleName, 1100, "sample error")
)

var (
	AuctionInvalidName = sdkerrors.Register(ModuleName, 1101, "Auction name is invalid")
	AuctionInvalidStart = sdkerrors.Register(ModuleName, 1102, "Auction start is invalid")
)

var (
	BidInvalidAuction = sdkerrors.Register(ModuleName, 1201, "Auction id is invalid")
	BidInvalidAmount = sdkerrors.Register(ModuleName, 1202, "Bid amount is invalid")
	BidLowAmount = sdkerrors.Register(ModuleName, 1203, "Bid amount is under")
	BidDuplciateBidder = sdkerrors.Register(ModuleName, 1203, "Bidder is duplicated")
)
