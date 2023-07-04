import { Sequelize } from "sequelize";
import dbConfig from "../config/database";

export const sequelizeConnection = new Sequelize(dbConfig as any);
