import { Router } from "express";
import ProductController from "./controller/product.controller";

const productController = new ProductController();

export default () => {
    const routes = Router();

    routes.get("/products", productController.getAllProducts);
    routes.get("/products/:id", productController.getProductById);
    routes.get(
        "/products/c/:category",
        productController.getProductsByCategory
    );
    routes.put("/products/:id", productController.editProduct);

    routes.post("/products", productController.createProduct);
    routes.post("/products-list", productController.createProductList);

    routes.delete("/products/:id", productController.deleteProduct);

    return routes;
};
