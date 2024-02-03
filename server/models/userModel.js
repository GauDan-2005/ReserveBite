const mongoose = require("mongoose");
const address_schema = require("./addressSchema");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: [address_schema],
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Users", userSchema);
