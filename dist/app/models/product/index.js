"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports._Product = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../../main/database");
exports._Product = database_1.sequelizeConnection.define("Product", {
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    category: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.Product = exports._Product;
