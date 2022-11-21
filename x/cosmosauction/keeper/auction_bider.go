package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
)

// SetAuctionBider set a specific auctionBider in the store from its index
func (k Keeper) SetAuctionBider(ctx sdk.Context, auctionBider types.AuctionBider) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionBiderKeyPrefix))
	b := k.cdc.MustMarshal(&auctionBider)
	store.Set(types.AuctionBiderKey(
		auctionBider.Index,
	), b)
}

// GetAuctionBider returns a auctionBider from its index
func (k Keeper) GetAuctionBider(
	ctx sdk.Context,
	index string,

) (val types.AuctionBider, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionBiderKeyPrefix))

	b := store.Get(types.AuctionBiderKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveAuctionBider removes a auctionBider from the store
func (k Keeper) RemoveAuctionBider(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionBiderKeyPrefix))
	store.Delete(types.AuctionBiderKey(
		index,
	))
}

// GetAllAuctionBider returns all auctionBider
func (k Keeper) GetAllAuctionBider(ctx sdk.Context) (list []types.AuctionBider) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.AuctionBiderKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.AuctionBider
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
