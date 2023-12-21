import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class CreateBoardResponse extends jspb.Message {
  getId(): string;
  setId(value: string): CreateBoardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBoardResponse): CreateBoardResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBoardResponse;
  static deserializeBinaryFromReader(message: CreateBoardResponse, reader: jspb.BinaryReader): CreateBoardResponse;
}

export namespace CreateBoardResponse {
  export type AsObject = {
    id: string,
  }
}

export class ListBoardResponse extends jspb.Message {
  getId(): string;
  setId(value: string): ListBoardResponse;

  getName(): string;
  setName(value: string): ListBoardResponse;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ListBoardResponse;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ListBoardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBoardResponse): ListBoardResponse.AsObject;
  static serializeBinaryToWriter(message: ListBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBoardResponse;
  static deserializeBinaryFromReader(message: ListBoardResponse, reader: jspb.BinaryReader): ListBoardResponse;
}

export namespace ListBoardResponse {
  export type AsObject = {
    id: string,
    name: string,
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListBoardsResponse extends jspb.Message {
  getBoardsList(): Array<ListBoardResponse>;
  setBoardsList(value: Array<ListBoardResponse>): ListBoardsResponse;
  clearBoardsList(): ListBoardsResponse;
  addBoards(value?: ListBoardResponse, index?: number): ListBoardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBoardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBoardsResponse): ListBoardsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBoardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBoardsResponse;
  static deserializeBinaryFromReader(message: ListBoardsResponse, reader: jspb.BinaryReader): ListBoardsResponse;
}

export namespace ListBoardsResponse {
  export type AsObject = {
    boardsList: Array<ListBoardResponse.AsObject>,
  }
}

