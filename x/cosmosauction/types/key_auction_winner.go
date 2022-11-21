package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// AuctionWinnerKeyPrefix is the prefix to retrieve all AuctionWinner
	AuctionWinnerKeyPrefix = "AuctionWinner/value/"
)

// AuctionWinnerKey returns the store key to retrieve a AuctionWinner from the index fields
func AuctionWinnerKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
