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
exports.UserProductsMiddleware = void 0;
const models_1 = require("../../../models");
const api_response_1 = require("../../../models/api-response");
class UserProductsMiddleware {
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productId, userId } = req.body;
            const user = yield models_1.User.findByPk(userId);
            if (!user) {
                return res.status(404).json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "User not found",
                }));
            }
            const product = yield models_1.Product.findByPk(productId);
            if (!product) {
                return res.status(404).json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Product not found",
                }));
            }
            next();
        });
    }
    delete(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productId, userId } = req.body;
            const cartItem = yield models_1.UserProducts.findOne({
                where: {
                    user_id: userId,
                    product_id: productId,
                },
            });
            if (!cartItem) {
                return res.status(404).json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "tem not found",
                }));
            }
            next();
        });
    }
}
exports.UserProductsMiddleware = UserProductsMiddleware;
