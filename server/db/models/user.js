const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  is_google_auth: {
    type: Boolean,
    required: true,
  },
  username: {
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
  },
  birthday: {
    type: Date,
  },
  gender: {
    type: String,
    enum: ["MALE", "FEMALE"],
  },
  mobile_number: {
    type: String,
  },
  img_url: {
    type: String,
  },
  user_address_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  ],
  saved_hotel_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
  ],
  booking_ids: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
