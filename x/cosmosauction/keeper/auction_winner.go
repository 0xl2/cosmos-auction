package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

// SetAuctionWinner set a specific auctionWinner in the store from its index
func (k Keeper) SetAuctionWinner(ctx sdk.Context, auctionWinner types.AuctionWinner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionWinnerKeyPrefix))
	b := k.cdc.MustMarshal(&auctionWinner)
	store.Set(types.AuctionWinnerKey(
		auctionWinner.Index,
	), b)
}

// GetAuctionWinner returns a auctionWinner from its index
func (k Keeper) GetAuctionWinner(
	ctx sdk.Context,
	index string,

) (val types.AuctionWinner, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionWinnerKeyPrefix))

	b := store.Get(types.AuctionWinnerKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAuctionWinner removes a auctionWinner from the store
func (k Keeper) RemoveAuctionWinner(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionWinnerKeyPrefix))
	store.Delete(types.AuctionWinnerKey(
		index,
	))
}

// GetAllAuctionWinner returns all auctionWinner
func (k Keeper) GetAllAuctionWinner(ctx sdk.Context) (list []types.AuctionWinner) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionWinnerKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AuctionWinner
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
