"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_routes_1 = __importDefault(require("../../app/features/user/user.routes"));
const user_products_routes_1 = __importDefault(require("../../app/features/user-products/user-products.routes"));
const product_routes_1 = __importDefault(require("../../app/features/product/product.routes"));
const routes = {
    user: user_routes_1.default,
    userProducts: user_products_routes_1.default,
    products: product_routes_1.default,
};
exports.default = () => {
    const router = (0, express_1.Router)();
    Object.values(routes).map((route) => {
        router.use(route());
    });
    return router;
};
