import { Request } from "express";

export type CreateUserProductPayloadType = {
    userId: string;
    productId: string;
};

export type GetUserProductsPayloadType = {
    userId: string;
};

export type CreateUserProductRequestType = Request<
    any,
    any,
    CreateUserProductPayloadType
>;

export type GetUserProductsRequestType = Request<GetUserProductsPayloadType>;

export type DeleteUserProductParamsType = {
    userId: string;
    productId: string;
};

export type DeleteAllUserProductsParamsType = {
    userId: string;
};

export type DeleteUserProductQueryType = {
    quantity: "all" | "single";
};

export type DeleteUserPayloadType = DeleteUserProductParamsType &
    DeleteUserProductQueryType;

export type DeleteUserProductRequestType = Request<
    DeleteUserProductParamsType,
    any,
    null,
    DeleteUserProductQueryType
>;

export type DeleteAllUserProductsRequestType =
    Request<DeleteUserProductParamsType>;
