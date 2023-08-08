import { Request } from "express";

export type CreateProductPayloadType = {
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
};

export type GetProductByIdPayloadType = {
    id: string;
};

export type EditProductParamsType = {
    id: string;
};

export type EditProductBodyType = {
    title?: string;
    price?: string;
    category?: string;
    description?: string;
    image?: string;
};

export type EditProductPayloadType = EditProductParamsType &
    EditProductBodyType;

export type GetProductsByCategoryPayloadType = {
    category: string;
};

export type DeleteProductPayloadType = {
    id: string;
};

export type CreateProductRequestType = Request<
    any,
    any,
    CreateProductPayloadType
>;

export type CreateProductListRequestType = Request<
    any,
    any,
    CreateProductPayloadType[]
>;

export type DeleteProductRequestType = Request<
    any,
    DeleteProductPayloadType,
    null
>;

export type GetProductByIdRequestType = Request<
    any,
    GetProductByIdPayloadType,
    null
>;

export type GetProductsByCategoryRequestType = Request<
    any,
    GetProductsByCategoryPayloadType,
    null
>;

export type EditProductRequestType = Request<
    any,
    EditProductParamsType,
    EditProductBodyType
>;
