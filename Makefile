pbgen:
	yarn grpc_tools_node_protoc -I ../finder-backend/protofiles \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--js_out=import_style=commonjs,binary:./pb \
	--grpc_out=grpc_js:./pb \
	--ts_out=service=grpc-node,mode=grpc-js:./pb ../finder-backend/protofiles/*.proto