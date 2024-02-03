const mongoose = require("mongoose");

const booking = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  guests: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["CONFIRM", "CANCELLED", "ENDED"],
    required: true,
  },
  table_number: {
    type: String,
    required: true,
  },
  order: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "food",
    },
  ],
});

module.exports = new mongoose.model("Booking", booking);
