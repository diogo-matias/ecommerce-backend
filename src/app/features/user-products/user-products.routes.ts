import { Router } from "express";
import UserProductsController from "./controller/user-products.controller";
import { UserProductsMiddleware } from "./middlewares";

const controller = new UserProductsController();
const middleware = new UserProductsMiddleware();

export default () => {
    const routes = Router();

    routes.get("/cart/:userId", controller.getUserProducts);
    routes.post("/cart", middleware.create, controller.creteUserProduct);
    routes.post(
        "/cart/:userId/:productId",
        middleware.delete,
        controller.deleteUserProduct
    );
    routes.delete("/cart/:userId", controller.deleteAllUserProducts);

    return routes;
};
