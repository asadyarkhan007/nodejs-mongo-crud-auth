const dotenv = require('dotenv')
const path = require('path')


dotenv.config({
    path: path.resolve(__dirname, `${process.env.NODE_ENV}.env`)
});

module.exports = {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    NODE_ENV: process.env.NODE_ENV
}