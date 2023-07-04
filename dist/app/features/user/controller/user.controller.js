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
const user_repository_1 = require("../repository/user.repository");
const repository = new user_repository_1.UserRepository();
class UserController {
    getUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield repository.getUser(req.params);
                res.json(new api_response_1.ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "",
                }));
            }
            catch (err) {
                const error = err;
                res.json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to get user",
                    error: error,
                }));
            }
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield repository.createUser(req.body);
                res.json(new api_response_1.ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "User created successfully",
                }));
            }
            catch (err) {
                const error = err;
                res.json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to create user",
                    error: error,
                }));
            }
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield repository.deleteUser(req.params);
                res.json(new api_response_1.ApiResponseModel({
                    hasError: false,
                    data: data,
                    message: "User deleted successfully",
                }));
            }
            catch (err) {
                const error = err;
                res.json(new api_response_1.ApiResponseModel({
                    data: null,
                    hasError: true,
                    message: "Fail to delete user",
                    error: error,
                }));
            }
        });
    }
}
exports.default = UserController;
