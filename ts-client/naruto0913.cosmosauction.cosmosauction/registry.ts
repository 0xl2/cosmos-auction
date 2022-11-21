import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateAuction } from "./types/cosmosauction/cosmosauction/tx";
import { MsgAuctionBid } from "./types/cosmosauction/cosmosauction/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/naruto0913.cosmosauction.cosmosauction.MsgCreateAuction", MsgCreateAuction],
    ["/naruto0913.cosmosauction.cosmosauction.MsgAuctionBid", MsgAuctionBid],
    
];

export { msgTypes }