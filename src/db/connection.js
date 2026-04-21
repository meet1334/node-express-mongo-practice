const mongoose = require("mongoose");
const { DATABASE_URL } = require("../config");

const dbConnection = async () => {
  // check if connection is already connected then return
  if (mongoose.connection.readyState === 1) {
    return;
  }
  const databaseURL = DATABASE_URL
    ? DATABASE_URL
    : "mongodb://localhost:27017/notes";

  try {
    await mongoose
      .connect(databaseURL, {
        autoCreate: true,
      })
      .then(() => {
        console.log("database connected");
      });
    mongoose.connection.on("connected", () => {
      //console.log('Mongoose default connection open to ' + databaseURL)
      console.log("db connected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Mongoose default connection error: " + err);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("Mongoose default connection disconnected");
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = dbConnection;
