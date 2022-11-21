import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgAuctionBid } from "./types/cosmosauction/cosmosauction/tx";
import { MsgCreateAuction } from "./types/cosmosauction/cosmosauction/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/naruto0913.cosmosauction.cosmosauction.MsgAuctionBid", MsgAuctionBid],
    ["/naruto0913.cosmosauction.cosmosauction.MsgCreateAuction", MsgCreateAuction],
    
];

export { msgTypes }