import { NextFunction, Response } from "express";
import {
    CreateUserProductRequestType,
    DeleteUserProductRequestType,
} from "../types";
import { Product, User, UserProducts } from "../../../models";
import { ApiResponseModel } from "../../../models/api-response";

export class UserProductsMiddleware {
    async create(
        req: CreateUserProductRequestType,
        res: Response,
        next: NextFunction
    ) {
        const { productId, userId } = req.body;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "User not found",
                })
            );
        }

        const product = await Product.findByPk(productId);

        if (!product) {
            return res.status(404).json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Product not found",
                })
            );
        }

        next();
    }

    async delete(
        req: DeleteUserProductRequestType,
        res: Response,
        next: NextFunction
    ) {
        const { productId, userId } = req.body;

        const cartItem = await UserProducts.findOne({
            where: {
                user_id: userId,
                product_id: productId,
            },
        });

        if (!cartItem) {
            return res.status(404).json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "tem not found",
                })
            );
        }

        next();
    }
}
