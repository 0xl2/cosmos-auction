import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateBid } from "./types/cosmosauction/cosmosauction/tx";
import { MsgCreateAuction } from "./types/cosmosauction/cosmosauction/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/naruto0913.cosmosauction.MsgCreateBid", MsgCreateBid],
    ["/naruto0913.cosmosauction.MsgCreateAuction", MsgCreateAuction],
    
];

export { msgTypes }