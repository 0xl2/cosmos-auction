package cli

import (
	"context"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/naruto0913/cosmos-auction/x/cosmosauction/types"
	"github.com/spf13/cobra"
)

func CmdListAuctionWinner() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-auction-winner",
		Short: "list all auctionWinner",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllAuctionWinnerRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.AuctionWinnerAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowAuctionWinner() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-auction-winner [index]",
		Short: "shows a auctionWinner",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argIndex := args[0]

			params := &types.QueryGetAuctionWinnerRequest{
				Index: argIndex,
			}

			res, err := queryClient.AuctionWinner(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
