import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../../main/database";
import { Product } from "../product";
import { UserProducts } from "../user-products";

export const _User = sequelizeConnection.define("User", {
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
});

// _User.belongsToMany(Product, { through: UserProducts });

export const User = _User;

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
