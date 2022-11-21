/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "naruto0913.cosmosauction";

export interface MsgCreateAuction {
  creator: string;
  name: string;
  limit: number;
}

export interface MsgCreateAuctionResponse {
  auctionIndex: string;
}

export interface MsgCreateBid {
  creator: string;
  auction: number;
  bid: number;
}

export interface MsgCreateBidResponse {
  bidResult: string;
}

function createBaseMsgCreateAuction(): MsgCreateAuction {
  return { creator: "", name: "", limit: 0 };
}

export const MsgCreateAuction = {
  encode(message: MsgCreateAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.limit !== 0) {
      writer.uint32(24).uint64(message.limit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAuction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      limit: isSet(object.limit) ? Number(object.limit) : 0,
    };
  },

  toJSON(message: MsgCreateAuction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuction>, I>>(object: I): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.limit = object.limit ?? 0;
    return message;
  },
};

function createBaseMsgCreateAuctionResponse(): MsgCreateAuctionResponse {
  return { auctionIndex: "" };
}

export const MsgCreateAuctionResponse = {
  encode(message: MsgCreateAuctionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionIndex !== "") {
      writer.uint32(10).string(message.auctionIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateAuctionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateAuctionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionIndex = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateAuctionResponse {
    return { auctionIndex: isSet(object.auctionIndex) ? String(object.auctionIndex) : "" };
  },

  toJSON(message: MsgCreateAuctionResponse): unknown {
    const obj: any = {};
    message.auctionIndex !== undefined && (obj.auctionIndex = message.auctionIndex);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuctionResponse>, I>>(object: I): MsgCreateAuctionResponse {
    const message = createBaseMsgCreateAuctionResponse();
    message.auctionIndex = object.auctionIndex ?? "";
    return message;
  },
};

function createBaseMsgCreateBid(): MsgCreateBid {
  return { creator: "", auction: 0, bid: 0 };
}

export const MsgCreateBid = {
  encode(message: MsgCreateBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auction !== 0) {
      writer.uint32(16).uint64(message.auction);
    }
    if (message.bid !== 0) {
      writer.uint32(24).uint64(message.bid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.auction = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.bid = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      auction: isSet(object.auction) ? Number(object.auction) : 0,
      bid: isSet(object.bid) ? Number(object.bid) : 0,
    };
  },

  toJSON(message: MsgCreateBid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auction !== undefined && (obj.auction = Math.round(message.auction));
    message.bid !== undefined && (obj.bid = Math.round(message.bid));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBid>, I>>(object: I): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    message.creator = object.creator ?? "";
    message.auction = object.auction ?? 0;
    message.bid = object.bid ?? 0;
    return message;
  },
};

function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
  return { bidResult: "" };
}

export const MsgCreateBidResponse = {
  encode(message: MsgCreateBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.bidResult !== "") {
      writer.uint32(10).string(message.bidResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidResult = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateBidResponse {
    return { bidResult: isSet(object.bidResult) ? String(object.bidResult) : "" };
  },

  toJSON(message: MsgCreateBidResponse): unknown {
    const obj: any = {};
    message.bidResult !== undefined && (obj.bidResult = message.bidResult);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateBidResponse>, I>>(object: I): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    message.bidResult = object.bidResult ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAuction = this.CreateAuction.bind(this);
    this.CreateBid = this.CreateBid.bind(this);
  }
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.Msg", "CreateAuction", data);
    return promise.then((data) => MsgCreateAuctionResponse.decode(new _m0.Reader(data)));
  }

  CreateBid(request: MsgCreateBid): Promise<MsgCreateBidResponse> {
    const data = MsgCreateBid.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.Msg", "CreateBid", data);
    return promise.then((data) => MsgCreateBidResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
