const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },
});

module.exports = mongoose.model("Rating", ratingSchema);
