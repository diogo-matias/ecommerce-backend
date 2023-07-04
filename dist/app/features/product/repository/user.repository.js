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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../../../models");
const crypto_1 = __importDefault(require("crypto"));
class ProductRepository {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield models_1.Product.findAll({
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            });
            return response;
        });
    }
    getProductById(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = payload;
            const response = yield models_1.Product.findByPk(id);
            return response;
        });
    }
    getProductsByCategory(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { category } = payload;
            const response = yield models_1.Product.findAll({
                where: {
                    category: {
                        [sequelize_1.Op.iLike]: category,
                    },
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            });
            return response;
        });
    }
    editProduct(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, category, description, image, price, title } = payload;
            const product = (yield models_1.Product.findByPk(id));
            if (!product) {
                throw new Error();
            }
            const editedProduct = {
                title: title !== null && title !== void 0 ? title : product.id,
                price: price !== null && price !== void 0 ? price : product.price,
                category: category !== null && category !== void 0 ? category : product.category,
                description: description !== null && description !== void 0 ? description : product.description,
                image: image !== null && image !== void 0 ? image : product.image,
            };
            yield models_1.Product.update(editedProduct, {
                where: {
                    id,
                },
            });
            return editedProduct;
        });
    }
    createProduct(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = Object.assign({ id: crypto_1.default.randomUUID() }, payload);
            const response = yield models_1.Product.create(values);
            return response;
        });
    }
    deleteProduct(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = payload;
            const response = yield models_1.Product.destroy({
                where: {
                    id,
                },
            });
            if (!response) {
                throw new Error();
            }
            return response;
        });
    }
}
exports.ProductRepository = ProductRepository;
