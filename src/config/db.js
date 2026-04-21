const mongoose = require("mongoose");
const { DATABASE_URL } = require(".");

const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
