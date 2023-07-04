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
const api_response_1 = require("../../../models/api-response");
const user_products_repository_1 = require("../repository/user-products.repository");
const repository = new user_products_repository_1.UserProductsRepository();
class UserProductsController {
    creteUserProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield repository.createUserProduct(req.body);
                res.json(new api_response_1.ApiResponseModel({
                    hasError: false,
                    data,
                    message: "Product added to cart",
                }));
            }
            catch (err) {
                const error = err;
                res.json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to add product to cart",
                    error: error,
                }));
            }
        });
    }
    deleteUserProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const payload = Object.assign(Object.assign({}, req.query), req.body);
                const data = yield repository.deleteUserProduct(payload);
                res.json(new api_response_1.ApiResponseModel({
                    hasError: false,
                    data,
                    message: "Product deleted from cart",
                }));
            }
            catch (err) {
                const error = err;
                res.json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to delete product from cart",
                    error: error,
                }));
            }
        });
    }
}
exports.default = UserProductsController;
