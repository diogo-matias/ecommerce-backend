"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./controller/user.controller"));
const userController = new user_controller_1.default();
exports.default = () => {
    const routes = (0, express_1.Router)();
    routes.post("/users", userController.createUser);
    routes.get("/users/:id", userController.getUser);
    routes.delete("/users/:id", userController.deleteUser);
    return routes;
};
