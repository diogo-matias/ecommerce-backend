import { Request } from "express";

export type CreateUserPayloadType = {
    email: string;
    password: string;
    name: string;
};

export type GetUserPayloadType = {
    id: string;
};

export type DeleteUserPayloadType = {
    id: string;
};

export type CreateUserRequestType = Request<any, any, CreateUserPayloadType>;
export type GetUserRequestType = Request<any, GetUserPayloadType, null>;
export type DeleteUserRequestType = Request<any, DeleteUserPayloadType, null>;
