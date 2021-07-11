// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: like.proto

import * as like_pb from "./like_pb";
import * as grpc from "@grpc/grpc-js";

interface ILikeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createLike: grpc.MethodDefinition<like_pb.CreateLikeReq, like_pb.CreateLikeRes>;
}

export const LikeServiceService: ILikeServiceService;

export interface ILikeServiceServer extends grpc.UntypedServiceImplementation {
  createLike: grpc.handleUnaryCall<like_pb.CreateLikeReq, like_pb.CreateLikeRes>;
}

export class LikeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createLike(argument: like_pb.CreateLikeReq, callback: grpc.requestCallback<like_pb.CreateLikeRes>): grpc.ClientUnaryCall;
  createLike(argument: like_pb.CreateLikeReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.CreateLikeRes>): grpc.ClientUnaryCall;
  createLike(argument: like_pb.CreateLikeReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<like_pb.CreateLikeRes>): grpc.ClientUnaryCall;
}
