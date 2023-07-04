import { Association, DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../../main/database";
import { User } from "../user";
import { Product } from "../product";

const _UserProducts = sequelizeConnection.define("UserProducts", {
    user_id: {
        type: DataTypes.UUID,
        references: { model: User, key: "id" },
    },
    product_id: {
        type: DataTypes.UUID,
        references: { model: Product, key: "id" },
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
});

export const UserProducts = _UserProducts;
