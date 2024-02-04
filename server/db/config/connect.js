const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const URI = process.env.MONGODB_URL;

const connect = async () => {
  await mongoose
    .connect(URI, {
      dbName: "reserve_bite",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

module.exports = connect;
