package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAuctionBid = "auction_bid"

var _ sdk.Msg = &MsgAuctionBid{}

func NewMsgAuctionBid(creator string, auction uint64, amount uint64) *MsgAuctionBid {
	return &MsgAuctionBid{
		Creator: creator,
		Auction: auction,
		Amount:  amount,
	}
}

func (msg *MsgAuctionBid) Route() string {
	return RouterKey
}

func (msg *MsgAuctionBid) Type() string {
	return TypeMsgAuctionBid
}

func (msg *MsgAuctionBid) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAuctionBid) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAuctionBid) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
