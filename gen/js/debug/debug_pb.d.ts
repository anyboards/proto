import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';


export class AddRequest extends jspb.Message {
  getA(): number;
  setA(value: number): AddRequest;

  getB(): number;
  setB(value: number): AddRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRequest): AddRequest.AsObject;
  static serializeBinaryToWriter(message: AddRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRequest;
  static deserializeBinaryFromReader(message: AddRequest, reader: jspb.BinaryReader): AddRequest;
}

export namespace AddRequest {
  export type AsObject = {
    a: number,
    b: number,
  }
}

export class AddResponse extends jspb.Message {
  getResult(): number;
  setResult(value: number): AddResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddResponse): AddResponse.AsObject;
  static serializeBinaryToWriter(message: AddResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddResponse;
  static deserializeBinaryFromReader(message: AddResponse, reader: jspb.BinaryReader): AddResponse;
}

export namespace AddResponse {
  export type AsObject = {
    result: number,
  }
}

export class GreetRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GreetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GreetRequest): GreetRequest.AsObject;
  static serializeBinaryToWriter(message: GreetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetRequest;
  static deserializeBinaryFromReader(message: GreetRequest, reader: jspb.BinaryReader): GreetRequest;
}

export namespace GreetRequest {
  export type AsObject = {
    name: string,
  }
}

export class GreetResponse extends jspb.Message {
  getGreeting(): string;
  setGreeting(value: string): GreetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GreetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GreetResponse): GreetResponse.AsObject;
  static serializeBinaryToWriter(message: GreetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GreetResponse;
  static deserializeBinaryFromReader(message: GreetResponse, reader: jspb.BinaryReader): GreetResponse;
}

export namespace GreetResponse {
  export type AsObject = {
    greeting: string,
  }
}

export class StreamRequest extends jspb.Message {
  getStreamId(): string;
  setStreamId(value: string): StreamRequest;

  getInterval(): google_protobuf_duration_pb.Duration | undefined;
  setInterval(value?: google_protobuf_duration_pb.Duration): StreamRequest;
  hasInterval(): boolean;
  clearInterval(): StreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StreamRequest): StreamRequest.AsObject;
  static serializeBinaryToWriter(message: StreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamRequest;
  static deserializeBinaryFromReader(message: StreamRequest, reader: jspb.BinaryReader): StreamRequest;
}

export namespace StreamRequest {
  export type AsObject = {
    streamId: string,
    interval?: google_protobuf_duration_pb.Duration.AsObject,
  }
}

export class StreamResponse extends jspb.Message {
  getMessageNum(): string;
  setMessageNum(value: string): StreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StreamResponse): StreamResponse.AsObject;
  static serializeBinaryToWriter(message: StreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StreamResponse;
  static deserializeBinaryFromReader(message: StreamResponse, reader: jspb.BinaryReader): StreamResponse;
}

export namespace StreamResponse {
  export type AsObject = {
    messageNum: string,
  }
}

export class TriggerStreamMessageRequest extends jspb.Message {
  getStreamId(): string;
  setStreamId(value: string): TriggerStreamMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerStreamMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerStreamMessageRequest): TriggerStreamMessageRequest.AsObject;
  static serializeBinaryToWriter(message: TriggerStreamMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerStreamMessageRequest;
  static deserializeBinaryFromReader(message: TriggerStreamMessageRequest, reader: jspb.BinaryReader): TriggerStreamMessageRequest;
}

export namespace TriggerStreamMessageRequest {
  export type AsObject = {
    streamId: string,
  }
}

export class TriggerStreamMessageResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): TriggerStreamMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TriggerStreamMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TriggerStreamMessageResponse): TriggerStreamMessageResponse.AsObject;
  static serializeBinaryToWriter(message: TriggerStreamMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TriggerStreamMessageResponse;
  static deserializeBinaryFromReader(message: TriggerStreamMessageResponse, reader: jspb.BinaryReader): TriggerStreamMessageResponse;
}

export namespace TriggerStreamMessageResponse {
  export type AsObject = {
    status: string,
  }
}

