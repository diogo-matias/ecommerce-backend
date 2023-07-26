import { Router } from "express";
import UserController from "./controller/user.controller";

const userController = new UserController();

export default () => {
    const routes = Router();

    routes.post("/user/login", userController.login);
    routes.post("/users", userController.createUser);
    routes.get("/users/:id", userController.getUser);
    routes.delete("/users/:id", userController.deleteUser);

    return routes;
};
