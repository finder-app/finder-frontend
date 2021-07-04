// package: pb
// file: foot_print.proto

import * as jspb from "google-protobuf";

export class GetUnreadCountReq extends jspb.Message {
  getCurrentUserUid(): string;
  setCurrentUserUid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadCountReq.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadCountReq): GetUnreadCountReq.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnreadCountReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadCountReq;
  static deserializeBinaryFromReader(message: GetUnreadCountReq, reader: jspb.BinaryReader): GetUnreadCountReq;
}

export namespace GetUnreadCountReq {
  export type AsObject = {
    currentUserUid: string,
  }
}

export class GetUnreadCountRes extends jspb.Message {
  getUnreadCount(): number;
  setUnreadCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUnreadCountRes.AsObject;
  static toObject(includeInstance: boolean, msg: GetUnreadCountRes): GetUnreadCountRes.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUnreadCountRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUnreadCountRes;
  static deserializeBinaryFromReader(message: GetUnreadCountRes, reader: jspb.BinaryReader): GetUnreadCountRes;
}

export namespace GetUnreadCountRes {
  export type AsObject = {
    unreadCount: number,
  }
}

