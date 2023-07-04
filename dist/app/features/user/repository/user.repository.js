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
exports.UserRepository = void 0;
const models_1 = require("../../../models");
const crypto_1 = __importDefault(require("crypto"));
class UserRepository {
    createUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const values = Object.assign({ id: crypto_1.default.randomUUID() }, payload);
            const response = yield models_1.User.create(values);
            return response;
        });
    }
    getUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = payload;
            const response = yield models_1.User.findByPk(id, {
                attributes: {
                    exclude: ["createdAt", "updatedAt"],
                },
                include: {
                    model: models_1.Product,
                    through: { attributes: ["quantity"] },
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            });
            return response;
        });
    }
    deleteUser(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = payload;
            const response = yield models_1.User.destroy({
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
exports.UserRepository = UserRepository;
