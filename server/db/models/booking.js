const mongoose = require("mongoose");

const booking = new mongoose.Schema({
  booking_date_time: {
    type: Date,
    default: Date.now,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["CONFIRMED", "CANCELLED", "ENDED"],
    required: true,
  },
  table_number: {
    type: String,
    required: true,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
    },
  ],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  hotel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
  offers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Offer",
    },
  ],
});

module.exports = new mongoose.model("Booking", booking);
