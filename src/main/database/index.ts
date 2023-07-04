import { Sequelize } from "sequelize";
import dbConfig from "../config/database";
import { UserProducts } from "../../app/models/user-products";
import { User } from "../../app/models/user";
import { Product } from "../../app/models/product";

export const sequelizeConnection = new Sequelize(dbConfig as any);
