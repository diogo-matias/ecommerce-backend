import app from "./config/app";
import { sequelizeConnection } from "./database";

const port = 3333;

async function connect() {
    try {
        await sequelizeConnection.authenticate();

        app.listen(port, () => {
            console.log("Server is running...");
        });

        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

connect();
