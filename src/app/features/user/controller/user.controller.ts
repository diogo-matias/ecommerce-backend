import { Response } from "express";
import {
    CreateUserRequestType,
    DeleteUserRequestType,
    GetUserRequestType,
} from "../types";
import { ApiResponseModel } from "../../../models/api-response";

import { UserRepository } from "../repository/user.repository";

const repository = new UserRepository();

export default class UserController {
    async getUser(req: GetUserRequestType, res: Response) {
        try {
            const data = await repository.getUser(req.params);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to get user",
                    error: error,
                })
            );
        }
    }

    async createUser(req: CreateUserRequestType, res: Response) {
        try {
            const data = await repository.createUser(req.body);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "User created successfully",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to create user",
                    error: error,
                })
            );
        }
    }

    async deleteUser(req: DeleteUserRequestType, res: Response) {
        try {
            const data = await repository.deleteUser(req.params);

            res.json(
                new ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "User deleted successfully",
                })
            );
        } catch (error) {
            res.json(
                new ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to delete user",
                    error: error,
                })
            );
        }
    }
}
