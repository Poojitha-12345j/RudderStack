require("dotenv").config();

const ENV = process.env.ENV || "dev";

const envConfig = {
    baseUrl: process.env[`${ENV.toUpperCase()}_BASE_URL`],
    username: process.env[`${ENV.toUpperCase()}_USERNAME`],
    password: process.env[`${ENV.toUpperCase()}_PASSWORD`],
};
module.exports = { envConfig };
