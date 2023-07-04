import { Request } from "express";

export type CreateUserProductPayloadType = {
    userId: string;
    productId: string;
};

export type CreateUserProductRequestType = Request<
    any,
    any,
    CreateUserProductPayloadType
>;

export type DeleteUserProductBodyType = {
    userId: string;
    productId: string;
};

export type DeleteUserProductQueryType = {
    quantity: "all" | "single";
};

export type DeleteUserPayloadType = DeleteUserProductBodyType &
    DeleteUserProductQueryType;

export type DeleteUserProductRequestType = Request<
    any,
    any,
    DeleteUserProductBodyType,
    DeleteUserProductQueryType
>;
