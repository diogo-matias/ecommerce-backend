"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_products_controller_1 = __importDefault(require("./controller/user-products.controller"));
const middlewares_1 = require("./middlewares");
const controller = new user_products_controller_1.default();
const middleware = new middlewares_1.UserProductsMiddleware();
exports.default = () => {
    const routes = (0, express_1.Router)();
    routes.post("/cart", middleware.create, controller.creteUserProduct);
    routes.delete("/cart", middleware.delete, controller.deleteUserProduct);
    return routes;
};
