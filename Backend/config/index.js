const dotenv = require("dotenv");
dotenv.config()
module.exports = {
  PORT: process.env.PORT||5500,
  MONGODB: process.env.MONGODB
};
