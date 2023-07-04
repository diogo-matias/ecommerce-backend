import { Model, Op } from "sequelize";
import { Product } from "../../../models";
import {
    CreateProductPayloadType,
    DeleteProductPayloadType,
    EditProductPayloadType,
    GetProductByIdPayloadType,
    GetProductsByCategoryPayloadType,
} from "../types";
import crypto from "crypto";
import { ProductModelType } from "../../../models/product/types";

export class ProductRepository {
    async getAllProducts() {
        const response = await Product.findAll({
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        return response;
    }

    async getProductById(payload: GetProductByIdPayloadType) {
        const { id } = payload;

        const response = await Product.findByPk(id);

        return response;
    }

    async getProductsByCategory(payload: GetProductsByCategoryPayloadType) {
        const { category } = payload;

        const response = await Product.findAll({
            where: {
                category: {
                    [Op.iLike]: category,
                },
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        return response;
    }

    async editProduct(payload: EditProductPayloadType) {
        const { id, category, description, image, price, title } = payload;

        const product = (await Product.findByPk(
            id
        )) as unknown as ProductModelType;

        if (!product) {
            throw new Error();
        }

        const editedProduct = {
            title: title ?? product.id,
            price: price ?? product.price,
            category: category ?? product.category,
            description: description ?? product.description,
            image: image ?? product.image,
        };

        await Product.update(editedProduct, {
            where: {
                id,
            },
        });

        return editedProduct;
    }

    async createProduct(payload: CreateProductPayloadType) {
        const values = {
            id: crypto.randomUUID(),
            ...payload,
        };

        const response = await Product.create(values);

        return response;
    }

    async deleteProduct(payload: DeleteProductPayloadType) {
        const { id } = payload;

        const response = await Product.destroy({
            where: {
                id,
            },
        });

        if (!response) {
            throw new Error();
        }

        return response;
    }
}
