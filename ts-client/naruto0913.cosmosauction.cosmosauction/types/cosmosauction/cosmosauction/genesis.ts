/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AuctionBider } from "./auction_bider";
import { AuctionWinner } from "./auction_winner";
import { Params } from "./params";

export const protobufPackage = "naruto0913.cosmosauction.cosmosauction";

/** GenesisState defines the cosmosauction module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  auctionBiderList: AuctionBider[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  auctionWinnerList: AuctionWinner[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, auctionBiderList: [], auctionWinnerList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.auctionBiderList) {
      AuctionBider.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.auctionWinnerList) {
      AuctionWinner.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.auctionBiderList.push(AuctionBider.decode(reader, reader.uint32()));
          break;
        case 3:
          message.auctionWinnerList.push(AuctionWinner.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      auctionBiderList: Array.isArray(object?.auctionBiderList)
        ? object.auctionBiderList.map((e: any) => AuctionBider.fromJSON(e))
        : [],
      auctionWinnerList: Array.isArray(object?.auctionWinnerList)
        ? object.auctionWinnerList.map((e: any) => AuctionWinner.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.auctionBiderList) {
      obj.auctionBiderList = message.auctionBiderList.map((e) => e ? AuctionBider.toJSON(e) : undefined);
    } else {
      obj.auctionBiderList = [];
    }
    if (message.auctionWinnerList) {
      obj.auctionWinnerList = message.auctionWinnerList.map((e) => e ? AuctionWinner.toJSON(e) : undefined);
    } else {
      obj.auctionWinnerList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.auctionBiderList = object.auctionBiderList?.map((e) => AuctionBider.fromPartial(e)) || [];
    message.auctionWinnerList = object.auctionWinnerList?.map((e) => AuctionWinner.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
