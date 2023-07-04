"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports._User = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../../main/database");
exports._User = database_1.sequelizeConnection.define("User", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
// _User.belongsToMany(Product, { through: UserProducts });
exports.User = exports._User;
// export class User extends Model {
//     static initialize(connection) {
//         super.init(
//             {
//                 name: {
//                     type: DataTypes.STRING,
//                     allowNull: false,
//                 },
//                 email: {
//                     type: DataTypes.STRING,
//                     allowNull: false,
//                 },
//                 password: {
//                     type: DataTypes.STRING,
//                     allowNull: false,
//                 },
//             },
//             {
//                 sequelize: connection,
//             }
//         );
//     }
// }
