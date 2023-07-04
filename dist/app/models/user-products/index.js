"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProducts = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../../main/database");
const user_1 = require("../user");
const product_1 = require("../product");
const _UserProducts = database_1.sequelizeConnection.define("UserProducts", {
    user_id: {
        type: sequelize_1.DataTypes.UUID,
        references: { model: user_1.User, key: "id" },
    },
    product_id: {
        type: sequelize_1.DataTypes.UUID,
        references: { model: product_1.Product, key: "id" },
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
    },
});
exports.UserProducts = _UserProducts;
