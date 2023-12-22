// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             v3.12.4
// source: boards.proto

package boards

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	Boards_Create_FullMethodName     = "/anyboards.boards.v1.Boards/Create"
	Boards_ListBoards_FullMethodName = "/anyboards.boards.v1.Boards/ListBoards"
	Boards_GetBoard_FullMethodName   = "/anyboards.boards.v1.Boards/GetBoard"
)

// BoardsClient is the client API for Boards service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BoardsClient interface {
	Create(ctx context.Context, in *CreateBoardRequest, opts ...grpc.CallOption) (*CreateBoardResponse, error)
	ListBoards(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListBoardResponse, error)
	GetBoard(ctx context.Context, in *GetBoardRequest, opts ...grpc.CallOption) (*GetBoardResponse, error)
}

type boardsClient struct {
	cc grpc.ClientConnInterface
}

func NewBoardsClient(cc grpc.ClientConnInterface) BoardsClient {
	return &boardsClient{cc}
}

func (c *boardsClient) Create(ctx context.Context, in *CreateBoardRequest, opts ...grpc.CallOption) (*CreateBoardResponse, error) {
	out := new(CreateBoardResponse)
	err := c.cc.Invoke(ctx, Boards_Create_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *boardsClient) ListBoards(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListBoardResponse, error) {
	out := new(ListBoardResponse)
	err := c.cc.Invoke(ctx, Boards_ListBoards_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *boardsClient) GetBoard(ctx context.Context, in *GetBoardRequest, opts ...grpc.CallOption) (*GetBoardResponse, error) {
	out := new(GetBoardResponse)
	err := c.cc.Invoke(ctx, Boards_GetBoard_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BoardsServer is the server API for Boards service.
// All implementations must embed UnimplementedBoardsServer
// for forward compatibility
type BoardsServer interface {
	Create(context.Context, *CreateBoardRequest) (*CreateBoardResponse, error)
	ListBoards(context.Context, *emptypb.Empty) (*ListBoardResponse, error)
	GetBoard(context.Context, *GetBoardRequest) (*GetBoardResponse, error)
	mustEmbedUnimplementedBoardsServer()
}

// UnimplementedBoardsServer must be embedded to have forward compatible implementations.
type UnimplementedBoardsServer struct {
}

func (UnimplementedBoardsServer) Create(context.Context, *CreateBoardRequest) (*CreateBoardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedBoardsServer) ListBoards(context.Context, *emptypb.Empty) (*ListBoardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListBoards not implemented")
}
func (UnimplementedBoardsServer) GetBoard(context.Context, *GetBoardRequest) (*GetBoardResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBoard not implemented")
}
func (UnimplementedBoardsServer) mustEmbedUnimplementedBoardsServer() {}

// UnsafeBoardsServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BoardsServer will
// result in compilation errors.
type UnsafeBoardsServer interface {
	mustEmbedUnimplementedBoardsServer()
}

func RegisterBoardsServer(s grpc.ServiceRegistrar, srv BoardsServer) {
	s.RegisterService(&Boards_ServiceDesc, srv)
}

func _Boards_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateBoardRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BoardsServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Boards_Create_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BoardsServer).Create(ctx, req.(*CreateBoardRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _Boards_ListBoards_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BoardsServer).ListBoards(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Boards_ListBoards_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BoardsServer).ListBoards(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _Boards_GetBoard_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetBoardRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BoardsServer).GetBoard(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: Boards_GetBoard_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BoardsServer).GetBoard(ctx, req.(*GetBoardRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// Boards_ServiceDesc is the grpc.ServiceDesc for Boards service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var Boards_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "anyboards.boards.v1.Boards",
	HandlerType: (*BoardsServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _Boards_Create_Handler,
		},
		{
			MethodName: "ListBoards",
			Handler:    _Boards_ListBoards_Handler,
		},
		{
			MethodName: "GetBoard",
			Handler:    _Boards_GetBoard_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "boards.proto",
}