/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "naruto0913.cosmosauction.cosmosauction";

export interface MsgCreateAuction {
  creator: string;
  name: string;
  start: number;
}

export interface MsgCreateAuctionResponse {
  auctionIndex: string;
}

export interface MsgAuctionBid {
  creator: string;
  auction: number;
  amount: number;
}

export interface MsgAuctionBidResponse {
}

function createBaseMsgCreateAuction(): MsgCreateAuction {
  return { creator: "", name: "", start: 0 };
}

export const MsgCreateAuction = {
  encode(message: MsgCreateAuction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.start !== 0) {
      writer.uint32(24).uint64(message.start);
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
          message.start = longToNumber(reader.uint64() as Long);
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
      start: isSet(object.start) ? Number(object.start) : 0,
    };
  },

  toJSON(message: MsgCreateAuction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.start !== undefined && (obj.start = Math.round(message.start));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateAuction>, I>>(object: I): MsgCreateAuction {
    const message = createBaseMsgCreateAuction();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.start = object.start ?? 0;
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

function createBaseMsgAuctionBid(): MsgAuctionBid {
  return { creator: "", auction: 0, amount: 0 };
}

export const MsgAuctionBid = {
  encode(message: MsgAuctionBid, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.auction !== 0) {
      writer.uint32(16).uint64(message.auction);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBid {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuctionBid();
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
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAuctionBid {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      auction: isSet(object.auction) ? Number(object.auction) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: MsgAuctionBid): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.auction !== undefined && (obj.auction = Math.round(message.auction));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAuctionBid>, I>>(object: I): MsgAuctionBid {
    const message = createBaseMsgAuctionBid();
    message.creator = object.creator ?? "";
    message.auction = object.auction ?? 0;
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseMsgAuctionBidResponse(): MsgAuctionBidResponse {
  return {};
}

export const MsgAuctionBidResponse = {
  encode(_: MsgAuctionBidResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAuctionBidResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAuctionBidResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAuctionBidResponse {
    return {};
  },

  toJSON(_: MsgAuctionBidResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAuctionBidResponse>, I>>(_: I): MsgAuctionBidResponse {
    const message = createBaseMsgAuctionBidResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AuctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateAuction = this.CreateAuction.bind(this);
    this.AuctionBid = this.AuctionBid.bind(this);
  }
  CreateAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.cosmosauction.Msg", "CreateAuction", data);
    return promise.then((data) => MsgCreateAuctionResponse.decode(new _m0.Reader(data)));
  }

  AuctionBid(request: MsgAuctionBid): Promise<MsgAuctionBidResponse> {
    const data = MsgAuctionBid.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.cosmosauction.Msg", "AuctionBid", data);
    return promise.then((data) => MsgAuctionBidResponse.decode(new _m0.Reader(data)));
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
