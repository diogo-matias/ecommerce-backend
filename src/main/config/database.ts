import * as pg from "pg";
import "dotenv/config";

const enviroment = process.env.NODE_ENV;
const ssl = enviroment === "production" ? true : false;

export default {
    dialect: "postgres",
    host: process.env.POSTGRES_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        ssl,
    },
    dialectModule: pg,
};
