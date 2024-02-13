const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Rating = require("../db/models/rating");

const ratingControllers = {
  getRating: async (req, res) => {},
  createRating: async (req, res) => {
    try {
      const { rating, user_review, hotel_id } = req.body;
      const newRating = new Rating({
        rating: rating,
        user_review: user_review,
        hotel_id: hotel_id,
        user_id: req.user.id,
      });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getRatingsByUser: async (req, res) => {
    try {
      const ratingsByUser = await Rating.find({ user_id: req.user.id });
      res.json(ratingsByUser);
    } catch (err) {
      res.status(400).json({ msgs: err.message });
    }
  },
  getRatingByHotel: async (req, res) => {
    try {
      const ratingsByHotel = await Rating.find({ hotel_id: req.body });
      res.json(ratingsByHotel);
    } catch (err) {
      res.status(400).json({ msgs: err.message });
    }
  },
};

module.exports = ratingControllers;
