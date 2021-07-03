// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_pb_GetUsersReq(arg) {
  if (!(arg instanceof user_pb.GetUsersReq)) {
    throw new Error('Expected argument of type pb.GetUsersReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUsersReq(buffer_arg) {
  return user_pb.GetUsersReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetUsersRes(arg) {
  if (!(arg instanceof user_pb.GetUsersRes)) {
    throw new Error('Expected argument of type pb.GetUsersRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetUsersRes(buffer_arg) {
  return user_pb.GetUsersRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  getUsers: {
    path: '/pb.UserService/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUsersReq,
    responseType: user_pb.GetUsersRes,
    requestSerialize: serialize_pb_GetUsersReq,
    requestDeserialize: deserialize_pb_GetUsersReq,
    responseSerialize: serialize_pb_GetUsersRes,
    responseDeserialize: deserialize_pb_GetUsersRes,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);