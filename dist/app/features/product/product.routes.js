"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("./controller/product.controller"));
const productController = new product_controller_1.default();
exports.default = () => {
    const routes = (0, express_1.Router)();
    routes.get("/products", productController.getAllProducts);
    routes.get("/products/:id", productController.getProductById);
    routes.get("/products/c/:category", productController.getProductsByCategory);
    routes.put("/products/:id", productController.editProduct);
    routes.post("/products", productController.createProduct);
    routes.delete("/products/:id", productController.deleteProduct);
    return routes;
};
