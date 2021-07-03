// GENERATED CODE -- DO NOT EDIT!

// package: pb
// file: user.proto

import * as user_pb from "./user_pb";
import * as grpc from "@grpc/grpc-js";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getUsers: grpc.MethodDefinition<user_pb.GetUsersReq, user_pb.GetUsersRes>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
  getUsers: grpc.handleUnaryCall<user_pb.GetUsersReq, user_pb.GetUsersRes>;
}

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getUsers(argument: user_pb.GetUsersReq, callback: grpc.requestCallback<user_pb.GetUsersRes>): grpc.ClientUnaryCall;
  getUsers(argument: user_pb.GetUsersReq, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUsersRes>): grpc.ClientUnaryCall;
  getUsers(argument: user_pb.GetUsersReq, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_pb.GetUsersRes>): grpc.ClientUnaryCall;
}
