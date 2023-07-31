// import { Product } from "../../../models";
import { Model } from "sequelize";
import { Product } from "../../../models";
import { User } from "../../../models/user";
import { UserProducts } from "../../../models/user-products";
import { UserProductsModel } from "../../../models/user-products/types";
import {
    CreateUserProductPayloadType,
    DeleteAllUserProductsParamsType,
    DeleteUserPayloadType,
    GetUserProductsPayloadType,
} from "../types";
import { GetUserPayloadType } from "../../user/types";

export class UserProductsRepository {
    async getUserProducts(payload: GetUserProductsPayloadType) {
        const { userId } = payload;

        // const items = (await UserProducts.findAll({
        //     where: {
        //         user_id: userId,
        //     },
        //     include: [
        //         {
        //             model: Product,
        //             as: "Products",
        //         },
        //     ],
        // })) as any;

        // const items = await UserProducts.findAll({
        //     include: { model: Product },
        // });

        // return items;
    }

    async createUserProduct(payload: CreateUserProductPayloadType) {
        const { productId, userId } = payload;

        const cartItem = (await UserProducts.findOne({
            where: {
                user_id: userId,
                product_id: productId,
            },
        })) as any;

        if (cartItem) {
            await cartItem.update({
                quantity: Number(cartItem.quantity) + 1,
            });
        } else {
            const user = await User.findByPk(userId);

            // @ts-ignore
            await user.addProduct(productId, { through: { quantity: 1 } });
        }

        return cartItem;
    }

    async deleteUserProduct(payload: DeleteUserPayloadType) {
        const { productId, userId, quantity = "single" } = payload;

        const user = await User.findByPk(userId);
        // let cartItem;

        if (quantity === "all") {
            // @ts-ignore
            await user.removeProduct(productId);
        } else {
            const cartItem = (await UserProducts.findOne({
                where: {
                    user_id: userId,
                    product_id: productId,
                },
            })) as any;

            if (cartItem.quantity <= 1) {
                // @ts-ignore
                await user.removeProduct(productId);
            }

            await cartItem.update({
                quantity: Number(cartItem.quantity) - 1,
            });
        }

        return user;
    }
    async deleteAllUserProducts(payload: DeleteAllUserProductsParamsType) {
        const { userId } = payload;

        const user = await User.findByPk(userId);

        if (!user) {
            throw "No one";
        }

        const products = await UserProducts.destroy({
            where: {
                user_id: userId,
            },
        });

        return products;
    }
}
