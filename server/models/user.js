const mongoose = require("mongoose");

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
  birthday: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE"],
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
  },
  saved_address: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  saved_hotel: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
  ],
  img: {
    type: String,
  },
  booking: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "booking",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
