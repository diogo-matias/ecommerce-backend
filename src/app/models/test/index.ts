// import { DataTypes, Sequelize } from "sequelize";
// import { sequelizeConnection } from "../../../main/database";

import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../../main/database";

// const Movie = sequelizeConnection.define("Movie", { name: DataTypes.STRING });
// const Actor = sequelizeConnection.define("Actor", { name: DataTypes.STRING });
// const ActorMovies = sequelizeConnection.define("ActorMovies", {
//     MovieId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Movie, // 'Movies' would also work
//             key: "id",
//         },
//     },
//     ActorId: {
//         type: DataTypes.INTEGER,
//         references: {
//             model: Actor, // 'Actors' would also work
//             key: "id",
//         },
//     },
// });
// Movie.belongsToMany(Actor, { through: ActorMovies });
// Actor.belongsToMany(Movie, { through: ActorMovies });

/////////////////////////// ------------------------------ /////////////////////////// ---------------

// export const _User = sequelizeConnection.define("User", {
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     password: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// });

// export const _Product = sequelizeConnection.define("Product", {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     price: {
//         type: DataTypes.FLOAT,
//         allowNull: false,
//     },
//     category: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     description: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// });

// const _UserProducts = sequelizeConnection.define("UserProducts", {
//     user_id: {
//         type: DataTypes.UUID,
//         references: { model: _User, key: "id" },
//     },
//     product_id: {
//         type: DataTypes.UUID,
//         references: { model: _Product, key: "id" },
//     },
// });

// _Product.belongsToMany(_User, { through: _UserProducts });
// _User.belongsToMany(_Product, { through: _UserProducts });
