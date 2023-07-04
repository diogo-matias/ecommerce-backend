import { Response } from "express";
import {
    CreateProductRequestType,
    DeleteProductRequestType,
    EditProductRequestType,
    GetProductByIdRequestType,
    GetProductsByCategoryRequestType,
} from "../types";
import { ApiResponseModel } from "../../../models/api-response";

import { ProductRepository } from "../repository/user.repository";

const repository = new ProductRepository();

export default class ProductController {
    async getAllProducts(_, res: Response) {
        try {
            const data = await repository.getAllProducts();

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to find products",
                    error: error,
                })
            );
        }
    }

    async getProductById(req: GetProductByIdRequestType, res: Response) {
        try {
            const data = await repository.getProductById(req.params);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to find product",
                    error: error,
                })
            );
        }
    }

    async getProductsByCategory(
        req: GetProductsByCategoryRequestType,
        res: Response
    ) {
        try {
            const data = await repository.getProductsByCategory(req.params);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to find products",
                    error: error,
                })
            );
        }
    }

    async editProduct(req: EditProductRequestType, res: Response) {
        try {
            const payload = {
                ...req.params,
                ...req.body,
            };

            const data = await repository.editProduct(payload);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to find product",
                    error: error,
                })
            );
        }
    }
    async createProduct(req: CreateProductRequestType, res: Response) {
        try {
            const data = await repository.createProduct(req.body);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "Product created successfully",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to create product",
                    error: error,
                })
            );
        }
    }

    async deleteProduct(req: DeleteProductRequestType, res: Response) {
        try {
            const data = await repository.deleteProduct(req.params);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "Product deleted successfully",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to delete product",
                    error: error,
                })
            );
        }
    }
}
