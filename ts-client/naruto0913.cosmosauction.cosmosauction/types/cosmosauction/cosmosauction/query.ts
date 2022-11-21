/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AuctionBider } from "./auction_bider";
import { AuctionWinner } from "./auction_winner";
import { Params } from "./params";

export const protobufPackage = "naruto0913.cosmosauction.cosmosauction";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAuctionBiderRequest {
  index: string;
}

export interface QueryGetAuctionBiderResponse {
  auctionBider: AuctionBider | undefined;
}

export interface QueryAllAuctionBiderRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAuctionBiderResponse {
  auctionBider: AuctionBider[];
  pagination: PageResponse | undefined;
}

export interface QueryGetAuctionWinnerRequest {
  index: string;
}

export interface QueryGetAuctionWinnerResponse {
  auctionWinner: AuctionWinner | undefined;
}

export interface QueryAllAuctionWinnerRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllAuctionWinnerResponse {
  auctionWinner: AuctionWinner[];
  pagination: PageResponse | undefined;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAuctionBiderRequest(): QueryGetAuctionBiderRequest {
  return { index: "" };
}

export const QueryGetAuctionBiderRequest = {
  encode(message: QueryGetAuctionBiderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAuctionBiderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuctionBiderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuctionBiderRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetAuctionBiderRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAuctionBiderRequest>, I>>(object: I): QueryGetAuctionBiderRequest {
    const message = createBaseQueryGetAuctionBiderRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetAuctionBiderResponse(): QueryGetAuctionBiderResponse {
  return { auctionBider: undefined };
}

export const QueryGetAuctionBiderResponse = {
  encode(message: QueryGetAuctionBiderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionBider !== undefined) {
      AuctionBider.encode(message.auctionBider, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAuctionBiderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuctionBiderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionBider = AuctionBider.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuctionBiderResponse {
    return { auctionBider: isSet(object.auctionBider) ? AuctionBider.fromJSON(object.auctionBider) : undefined };
  },

  toJSON(message: QueryGetAuctionBiderResponse): unknown {
    const obj: any = {};
    message.auctionBider !== undefined
      && (obj.auctionBider = message.auctionBider ? AuctionBider.toJSON(message.auctionBider) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAuctionBiderResponse>, I>>(object: I): QueryGetAuctionBiderResponse {
    const message = createBaseQueryGetAuctionBiderResponse();
    message.auctionBider = (object.auctionBider !== undefined && object.auctionBider !== null)
      ? AuctionBider.fromPartial(object.auctionBider)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAuctionBiderRequest(): QueryAllAuctionBiderRequest {
  return { pagination: undefined };
}

export const QueryAllAuctionBiderRequest = {
  encode(message: QueryAllAuctionBiderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAuctionBiderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionBiderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuctionBiderRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAuctionBiderRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAuctionBiderRequest>, I>>(object: I): QueryAllAuctionBiderRequest {
    const message = createBaseQueryAllAuctionBiderRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAuctionBiderResponse(): QueryAllAuctionBiderResponse {
  return { auctionBider: [], pagination: undefined };
}

export const QueryAllAuctionBiderResponse = {
  encode(message: QueryAllAuctionBiderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctionBider) {
      AuctionBider.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAuctionBiderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionBiderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionBider.push(AuctionBider.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuctionBiderResponse {
    return {
      auctionBider: Array.isArray(object?.auctionBider)
        ? object.auctionBider.map((e: any) => AuctionBider.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAuctionBiderResponse): unknown {
    const obj: any = {};
    if (message.auctionBider) {
      obj.auctionBider = message.auctionBider.map((e) => e ? AuctionBider.toJSON(e) : undefined);
    } else {
      obj.auctionBider = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAuctionBiderResponse>, I>>(object: I): QueryAllAuctionBiderResponse {
    const message = createBaseQueryAllAuctionBiderResponse();
    message.auctionBider = object.auctionBider?.map((e) => AuctionBider.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryGetAuctionWinnerRequest(): QueryGetAuctionWinnerRequest {
  return { index: "" };
}

export const QueryGetAuctionWinnerRequest = {
  encode(message: QueryGetAuctionWinnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAuctionWinnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuctionWinnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuctionWinnerRequest {
    return { index: isSet(object.index) ? String(object.index) : "" };
  },

  toJSON(message: QueryGetAuctionWinnerRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAuctionWinnerRequest>, I>>(object: I): QueryGetAuctionWinnerRequest {
    const message = createBaseQueryGetAuctionWinnerRequest();
    message.index = object.index ?? "";
    return message;
  },
};

function createBaseQueryGetAuctionWinnerResponse(): QueryGetAuctionWinnerResponse {
  return { auctionWinner: undefined };
}

export const QueryGetAuctionWinnerResponse = {
  encode(message: QueryGetAuctionWinnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.auctionWinner !== undefined) {
      AuctionWinner.encode(message.auctionWinner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAuctionWinnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGetAuctionWinnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionWinner = AuctionWinner.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAuctionWinnerResponse {
    return { auctionWinner: isSet(object.auctionWinner) ? AuctionWinner.fromJSON(object.auctionWinner) : undefined };
  },

  toJSON(message: QueryGetAuctionWinnerResponse): unknown {
    const obj: any = {};
    message.auctionWinner !== undefined
      && (obj.auctionWinner = message.auctionWinner ? AuctionWinner.toJSON(message.auctionWinner) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGetAuctionWinnerResponse>, I>>(
    object: I,
  ): QueryGetAuctionWinnerResponse {
    const message = createBaseQueryGetAuctionWinnerResponse();
    message.auctionWinner = (object.auctionWinner !== undefined && object.auctionWinner !== null)
      ? AuctionWinner.fromPartial(object.auctionWinner)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAuctionWinnerRequest(): QueryAllAuctionWinnerRequest {
  return { pagination: undefined };
}

export const QueryAllAuctionWinnerRequest = {
  encode(message: QueryAllAuctionWinnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAuctionWinnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionWinnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuctionWinnerRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryAllAuctionWinnerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAuctionWinnerRequest>, I>>(object: I): QueryAllAuctionWinnerRequest {
    const message = createBaseQueryAllAuctionWinnerRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAllAuctionWinnerResponse(): QueryAllAuctionWinnerResponse {
  return { auctionWinner: [], pagination: undefined };
}

export const QueryAllAuctionWinnerResponse = {
  encode(message: QueryAllAuctionWinnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.auctionWinner) {
      AuctionWinner.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllAuctionWinnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllAuctionWinnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.auctionWinner.push(AuctionWinner.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllAuctionWinnerResponse {
    return {
      auctionWinner: Array.isArray(object?.auctionWinner)
        ? object.auctionWinner.map((e: any) => AuctionWinner.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllAuctionWinnerResponse): unknown {
    const obj: any = {};
    if (message.auctionWinner) {
      obj.auctionWinner = message.auctionWinner.map((e) => e ? AuctionWinner.toJSON(e) : undefined);
    } else {
      obj.auctionWinner = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllAuctionWinnerResponse>, I>>(
    object: I,
  ): QueryAllAuctionWinnerResponse {
    const message = createBaseQueryAllAuctionWinnerResponse();
    message.auctionWinner = object.auctionWinner?.map((e) => AuctionWinner.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a AuctionBider by index. */
  AuctionBider(request: QueryGetAuctionBiderRequest): Promise<QueryGetAuctionBiderResponse>;
  /** Queries a list of AuctionBider items. */
  AuctionBiderAll(request: QueryAllAuctionBiderRequest): Promise<QueryAllAuctionBiderResponse>;
  /** Queries a AuctionWinner by index. */
  AuctionWinner(request: QueryGetAuctionWinnerRequest): Promise<QueryGetAuctionWinnerResponse>;
  /** Queries a list of AuctionWinner items. */
  AuctionWinnerAll(request: QueryAllAuctionWinnerRequest): Promise<QueryAllAuctionWinnerResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.AuctionBider = this.AuctionBider.bind(this);
    this.AuctionBiderAll = this.AuctionBiderAll.bind(this);
    this.AuctionWinner = this.AuctionWinner.bind(this);
    this.AuctionWinnerAll = this.AuctionWinnerAll.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.cosmosauction.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  AuctionBider(request: QueryGetAuctionBiderRequest): Promise<QueryGetAuctionBiderResponse> {
    const data = QueryGetAuctionBiderRequest.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.cosmosauction.Query", "AuctionBider", data);
    return promise.then((data) => QueryGetAuctionBiderResponse.decode(new _m0.Reader(data)));
  }

  AuctionBiderAll(request: QueryAllAuctionBiderRequest): Promise<QueryAllAuctionBiderResponse> {
    const data = QueryAllAuctionBiderRequest.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.cosmosauction.Query", "AuctionBiderAll", data);
    return promise.then((data) => QueryAllAuctionBiderResponse.decode(new _m0.Reader(data)));
  }

  AuctionWinner(request: QueryGetAuctionWinnerRequest): Promise<QueryGetAuctionWinnerResponse> {
    const data = QueryGetAuctionWinnerRequest.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.cosmosauction.Query", "AuctionWinner", data);
    return promise.then((data) => QueryGetAuctionWinnerResponse.decode(new _m0.Reader(data)));
  }

  AuctionWinnerAll(request: QueryAllAuctionWinnerRequest): Promise<QueryAllAuctionWinnerResponse> {
    const data = QueryAllAuctionWinnerRequest.encode(request).finish();
    const promise = this.rpc.request("naruto0913.cosmosauction.cosmosauction.Query", "AuctionWinnerAll", data);
    return promise.then((data) => QueryAllAuctionWinnerResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
