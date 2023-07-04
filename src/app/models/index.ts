import { User } from "./user";
import { Product } from "./product";
import { UserProducts } from "./user-products";

User.belongsToMany(Product, { through: UserProducts });
Product.belongsToMany(User, { through: UserProducts });

export { User, Product, UserProducts };
