// import { Product } from "../../../models";
import { Model } from "sequelize";
import { Product } from "../../../models";
import { User } from "../../../models/user";
import { UserProducts } from "../../../models/user-products";
import { UserProductsModel } from "../../../models/user-products/types";
import {
    CreateUserProductPayloadType,
    DeleteUserPayloadType,
    DeleteUserProductBodyType,
} from "../types";

export class UserProductsRepository {
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
}
