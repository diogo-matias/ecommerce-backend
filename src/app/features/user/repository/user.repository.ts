import { Product, User, UserProducts } from "../../../models";
import { CreateUserPayloadType, GetUserPayloadType } from "../types";
import crypto from "crypto";

export class UserRepository {
    async createUser(payload: CreateUserPayloadType) {
        const values = {
            id: crypto.randomUUID(),
            ...payload,
        };

        const response = await User.create(values);

        return response;
    }

    async getUser(payload: GetUserPayloadType) {
        const { id } = payload;

        const response = await User.findByPk(id, {
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
            include: {
                model: Product,
                through: { attributes: ["quantity"] },
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
            },
        });

        return response;
    }

    async deleteUser(payload: GetUserPayloadType) {
        const { id } = payload;

        const response = await User.destroy({
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
