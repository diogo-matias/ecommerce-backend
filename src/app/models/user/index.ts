import { DataTypes, Model } from "sequelize";
import { sequelizeConnection } from "../../../main/database";
import { Product } from "../product";
import { UserProducts } from "../user-products";

export const _User = sequelizeConnection.define(
    "User",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        hooks: {
            afterCreate: (record) => {
                delete record.dataValues.createdAt;
                delete record.dataValues.updatedAt;
            },
            afterUpdate: (record) => {
                delete record.dataValues.updatedAt;
                delete record.dataValues.createdAt;
            },
        },
    }
);

export const User = _User;
