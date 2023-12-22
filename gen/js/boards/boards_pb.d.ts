import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class CreateBoardRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateBoardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBoardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBoardRequest): CreateBoardRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBoardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBoardRequest;
  static deserializeBinaryFromReader(message: CreateBoardRequest, reader: jspb.BinaryReader): CreateBoardRequest;
}

export namespace CreateBoardRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateBoardResponse extends jspb.Message {
  getBoard(): Board | undefined;
  setBoard(value?: Board): CreateBoardResponse;
  hasBoard(): boolean;
  clearBoard(): CreateBoardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBoardResponse): CreateBoardResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBoardResponse;
  static deserializeBinaryFromReader(message: CreateBoardResponse, reader: jspb.BinaryReader): CreateBoardResponse;
}

export namespace CreateBoardResponse {
  export type AsObject = {
    board?: Board.AsObject,
  }
}

export class ListBoardResponseItem extends jspb.Message {
  getId(): string;
  setId(value: string): ListBoardResponseItem;

  getName(): string;
  setName(value: string): ListBoardResponseItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBoardResponseItem.AsObject;
  static toObject(includeInstance: boolean, msg: ListBoardResponseItem): ListBoardResponseItem.AsObject;
  static serializeBinaryToWriter(message: ListBoardResponseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBoardResponseItem;
  static deserializeBinaryFromReader(message: ListBoardResponseItem, reader: jspb.BinaryReader): ListBoardResponseItem;
}

export namespace ListBoardResponseItem {
  export type AsObject = {
    id: string,
    name: string,
  }
}

export class ListBoardResponse extends jspb.Message {
  getItemList(): Array<ListBoardResponseItem>;
  setItemList(value: Array<ListBoardResponseItem>): ListBoardResponse;
  clearItemList(): ListBoardResponse;
  addItem(value?: ListBoardResponseItem, index?: number): ListBoardResponseItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBoardResponse): ListBoardResponse.AsObject;
  static serializeBinaryToWriter(message: ListBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBoardResponse;
  static deserializeBinaryFromReader(message: ListBoardResponse, reader: jspb.BinaryReader): ListBoardResponse;
}

export namespace ListBoardResponse {
  export type AsObject = {
    itemList: Array<ListBoardResponseItem.AsObject>,
  }
}

export class GetBoardRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetBoardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoardRequest): GetBoardRequest.AsObject;
  static serializeBinaryToWriter(message: GetBoardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoardRequest;
  static deserializeBinaryFromReader(message: GetBoardRequest, reader: jspb.BinaryReader): GetBoardRequest;
}

export namespace GetBoardRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetBoardResponse extends jspb.Message {
  getBoard(): Board | undefined;
  setBoard(value?: Board): GetBoardResponse;
  hasBoard(): boolean;
  clearBoard(): GetBoardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetBoardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetBoardResponse): GetBoardResponse.AsObject;
  static serializeBinaryToWriter(message: GetBoardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetBoardResponse;
  static deserializeBinaryFromReader(message: GetBoardResponse, reader: jspb.BinaryReader): GetBoardResponse;
}

export namespace GetBoardResponse {
  export type AsObject = {
    board?: Board.AsObject,
  }
}

export class Board extends jspb.Message {
  getId(): string;
  setId(value: string): Board;

  getName(): string;
  setName(value: string): Board;

  getColumnList(): Array<Column>;
  setColumnList(value: Array<Column>): Board;
  clearColumnList(): Board;
  addColumn(value?: Column, index?: number): Column;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Board.AsObject;
  static toObject(includeInstance: boolean, msg: Board): Board.AsObject;
  static serializeBinaryToWriter(message: Board, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Board;
  static deserializeBinaryFromReader(message: Board, reader: jspb.BinaryReader): Board;
}

export namespace Board {
  export type AsObject = {
    id: string,
    name: string,
    columnList: Array<Column.AsObject>,
  }
}

export class Column extends jspb.Message {
  getId(): string;
  setId(value: string): Column;

  getName(): string;
  setName(value: string): Column;

  getCardList(): Array<Card>;
  setCardList(value: Array<Card>): Column;
  clearCardList(): Column;
  addCard(value?: Card, index?: number): Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Column.AsObject;
  static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
  static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Column;
  static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
  export type AsObject = {
    id: string,
    name: string,
    cardList: Array<Card.AsObject>,
  }
}

export class Card extends jspb.Message {
  getId(): string;
  setId(value: string): Card;

  getContent(): string;
  setContent(value: string): Card;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Card.AsObject;
  static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
  static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Card;
  static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
}

export namespace Card {
  export type AsObject = {
    id: string,
    content: string,
  }
}

