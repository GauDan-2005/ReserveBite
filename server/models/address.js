const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  address_line_1: {
    type: String,
    required: true,
  },
  address_line_2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  pin_code: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
  },
});

module.exports = addressSchema;
