"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProductsRepository = void 0;
const user_1 = require("../../../models/user");
const user_products_1 = require("../../../models/user-products");
class UserProductsRepository {
    createUserProduct(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productId, userId } = payload;
            const cartItem = (yield user_products_1.UserProducts.findOne({
                where: {
                    user_id: userId,
                    product_id: productId,
                },
            }));
            if (cartItem) {
                yield cartItem.update({
                    quantity: Number(cartItem.quantity) + 1,
                });
            }
            else {
                const user = yield user_1.User.findByPk(userId);
                // @ts-ignore
                yield user.addProduct(productId, { through: { quantity: 1 } });
            }
            return cartItem;
        });
    }
    deleteUserProduct(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productId, userId, quantity = "single" } = payload;
            const user = yield user_1.User.findByPk(userId);
            if (quantity === "all") {
                // @ts-ignore
                yield user.removeProduct(productId);
            }
            else {
                const cartItem = (yield user_products_1.UserProducts.findOne({
                    where: {
                        user_id: userId,
                        product_id: productId,
                    },
                }));
                if (cartItem.quantity <= 1) {
                    // @ts-ignore
                    yield user.removeProduct(productId);
                }
                yield cartItem.update({
                    quantity: Number(cartItem.quantity) - 1,
                });
            }
            return user;
        });
    }
}
exports.UserProductsRepository = UserProductsRepository;
