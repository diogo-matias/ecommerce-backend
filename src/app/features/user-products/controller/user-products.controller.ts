import { Response, Request } from "express";
import { ApiResponseModel } from "../../../models/api-response";
import {
    CreateUserProductRequestType,
    DeleteUserProductBodyType,
    DeleteUserProductRequestType,
} from "../types";
import { UserProductsRepository } from "../repository/user-products.repository";

const repository = new UserProductsRepository();

export default class UserProductsController {
    async creteUserProduct(req: CreateUserProductRequestType, res: Response) {
        try {
            const data = await repository.createUserProduct(req.body);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data,
                    message: "Product added to cart",
                })
            );
        } catch (err) {
            const error = err as Error;

            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to add product to cart",
                    error: error,
                })
            );
        }
    }

    async deleteUserProduct(req: DeleteUserProductRequestType, res: Response) {
        try {
            const payload = {
                ...req.query,
                ...req.body,
            };

            const data = await repository.deleteUserProduct(payload);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data,
                    message: "Product deleted from cart",
                })
            );
        } catch (err) {
            const error = err as Error;

            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to delete product from cart",
                    error: error,
                })
            );
        }
    }
}
