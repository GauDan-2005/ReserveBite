const Rating = require("../../db/models/rating");

const ratingControllers = {
  createRating: async (req, res) => {
    try {
      const { rating, user_review, hotel_id } = req.body;
      const newRating = new Rating({
        rating: rating,
        user_review: user_review,
        hotel_id: hotel_id,
        user_id: req.user.id,
      });
      await newRating.save();
      res.json({ msg: "Successfully created new Rating!" });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getRating: async (req, res) => {
    try {
      const rating = await Rating.findById({ _id: req.params.id });
      if (rating) res.json(rating);
      res.json({ msg: "Rating not found." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
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
  editRaing: async (req, res) => {
    try {
      const { rating, user_review, hotel_id } = req.body;

      await Offer.findByIdAndUpdate(
        { _id: req.params.id },
        {
          rating: rating,
          user_review: user_review,
          hotel_id: hotel_id,
          user_id: req.user.id,
        }
      );
      res.json({ msg: "Offer data changed successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  deleteRating: async (req, res) => {
    try {
      await Rating.findByIdAndDelete({ _id: req.params.id });
      res.json({ msg: "Rating deleted successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = ratingControllers;
