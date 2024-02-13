const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const address = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  address_line: {
    type: String,
    required: true,
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
  is_primary_address: {
    type: Boolean,
    required: true,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  hotel_id: {
    type: Schema.Types.ObjectId,
    ref: "Hotel",
  },
});

module.exports = new mongoose.model("Address", address);
