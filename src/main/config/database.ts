export default {
    dialect: "postgres",
    host: "ep-withered-paper-622628-pooler.us-east-1.postgres.vercel-storage.com",
    username: "default",
    password: "VdJA0LoxgE3P",
    database: "verceldb",
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        ssl: true,
    },
};
