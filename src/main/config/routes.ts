import { Express, Router } from "express";
import userRoutes from "../../app/features/user/user.routes";
import userProductsRoutes from "../../app/features/user-products/user-products.routes";
import productRoutes from "../../app/features/product/product.routes";

const routes = {
    user: userRoutes,
    userProducts: userProductsRoutes,
    products: productRoutes,
};

export default () => {
    const router = Router();

    Object.values(routes).map((route) => {
        router.use(route());
    });

    return router;
};
