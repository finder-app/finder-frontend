// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var like_pb = require('./like_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var user_pb = require('./user_pb.js');

function serialize_pb_CreateLikeReq(arg) {
  if (!(arg instanceof like_pb.CreateLikeReq)) {
    throw new Error('Expected argument of type pb.CreateLikeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateLikeReq(buffer_arg) {
  return like_pb.CreateLikeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_CreateLikeRes(arg) {
  if (!(arg instanceof like_pb.CreateLikeRes)) {
    throw new Error('Expected argument of type pb.CreateLikeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_CreateLikeRes(buffer_arg) {
  return like_pb.CreateLikeRes.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetOldestLikeReq(arg) {
  if (!(arg instanceof like_pb.GetOldestLikeReq)) {
    throw new Error('Expected argument of type pb.GetOldestLikeReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetOldestLikeReq(buffer_arg) {
  return like_pb.GetOldestLikeReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_pb_GetOldestLikeRes(arg) {
  if (!(arg instanceof like_pb.GetOldestLikeRes)) {
    throw new Error('Expected argument of type pb.GetOldestLikeRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_pb_GetOldestLikeRes(buffer_arg) {
  return like_pb.GetOldestLikeRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var LikeServiceService = exports.LikeServiceService = {
  createLike: {
    path: '/pb.LikeService/CreateLike',
    requestStream: false,
    responseStream: false,
    requestType: like_pb.CreateLikeReq,
    responseType: like_pb.CreateLikeRes,
    requestSerialize: serialize_pb_CreateLikeReq,
    requestDeserialize: deserialize_pb_CreateLikeReq,
    responseSerialize: serialize_pb_CreateLikeRes,
    responseDeserialize: deserialize_pb_CreateLikeRes,
  },
  getOldestLike: {
    path: '/pb.LikeService/GetOldestLike',
    requestStream: false,
    responseStream: false,
    requestType: like_pb.GetOldestLikeReq,
    responseType: like_pb.GetOldestLikeRes,
    requestSerialize: serialize_pb_GetOldestLikeReq,
    requestDeserialize: deserialize_pb_GetOldestLikeReq,
    responseSerialize: serialize_pb_GetOldestLikeRes,
    responseDeserialize: deserialize_pb_GetOldestLikeRes,
  },
};

exports.LikeServiceClient = grpc.makeGenericClientConstructor(LikeServiceService);
