import { Router } from "express";
import UserProductsController from "./controller/user-products.controller";
import { UserProductsMiddleware } from "./middlewares";

const controller = new UserProductsController();
const middleware = new UserProductsMiddleware();

export default () => {
    const routes = Router();

    routes.post("/cart", middleware.create, controller.creteUserProduct);
    routes.delete("/cart", middleware.delete, controller.deleteUserProduct);

    return routes;
};
