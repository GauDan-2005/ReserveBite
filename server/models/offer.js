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
  count: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

module.exports = new mongoose.model("Offer", offer);
