const mongoose = require("mongoose");

const offer = mongoose.Schema({
  time: {
    opening_time: {
      type: Date,
      default: Date.now,
      required: true,
    },
    closing_time: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  avail_counts: {
    type: Number,
    required: true,
  },
  is_available: {
    type: Boolean,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
    enum: ["PERCENTAGE", "AMOUNT"],
  },
  hotel_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    required: true,
  },
});

module.exports = new mongoose.model("Offer", offer);
