const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  time: {
    openingTime: {
      type: Date,
      required: true,
    },
    closingTime: {
      type: Date,
      required: true,
    },
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rating",
    },
  ],
  overall_rating: {
    type: Number,
    default: 0,
  },
  img: [
    {
      type: String,
    },
  ],
  overall_cuisine: [
    {
      cuisine: {
        type: String,
        enum: [
          "Italian",
          "Japanese",
          "Chinese",
          "Indian",
          "Mexican",
          "French",
          "Thai",
          "Greek",
          "Mediterranean",
          "Spanish",
          "Brazilian",
          "Vietnamese",
          "Korean",
          "Lebanese",
          "Turkish",
          "Moroccan",
          "American",
          "Cajun",
          "Caribbean",
          "Ethiopian",
          "Peruvian",
          "Malaysian",
          "German",
          "Russian",
          "Indonesian",
          "Filipino",
          "Irish",
          "South African",
          "Australian",
          "Scandinavian",
          "Middle Eastern",
          "Fusion",
          "Vegetarian/Vegan",
          "Gluten-Free",
          "Paleo",
          "Low-Carb",
          "Farm-to-Table",
          "Seafood",
          "Barbecue",
          "Street Food",
        ],
      },
    },
  ],
  menu: {
    food: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "food",
      },
    ],
    file: [
      {
        type: String,
      },
    ],
  },
  offer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Offer",
    },
  ],
});

module.exports = mongoose.model("Hotel", hotelSchema);
