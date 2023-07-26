import { Product, User, UserProducts } from "../../../models";
import {
    CreateUserPayloadType,
    GetUserPayloadType,
    LoginPayloadType,
} from "../types";
import crypto from "crypto";

export class UserRepository {
    async createUser(payload: CreateUserPayloadType) {
        const values = {
            id: crypto.randomUUID(),
            ...payload,
        };

        const user = await User.findOne({
            where: {
                email: payload.email,
                password: payload.password,
            },
        });

        if (user) {
            throw new Error("user already exist");
        }

        const response = (await User.create(values)) as any;

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

    async login(payload: LoginPayloadType) {
        const { email, password } = payload;

        const response = await User.findOne({
            where: {
                password,
                email,
            },
            attributes: {
                exclude: ["createdAt", "updatedAt"],
            },
        });

        if (!response) {
            throw new Error();
        }

        return response;
    }
}
