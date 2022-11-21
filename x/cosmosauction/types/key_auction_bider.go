package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AuctionBiderKeyPrefix is the prefix to retrieve all AuctionBider
	AuctionBiderKeyPrefix = "AuctionBider/value/"
)

// AuctionBiderKey returns the store key to retrieve a AuctionBider from the index fields
func AuctionBiderKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
