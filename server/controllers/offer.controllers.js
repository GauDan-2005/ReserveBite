const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Offer = require("../db/models/offer");

const offerControllers = {
  createOffer: async (req, res) => {
    try {
      const {
        time,
        avail_counts,
        is_available,
        discount_type,
        discount,
        hotel_id,
      } = req.body;
      const newOffer = new Offer({
        time: time,
        avail_counts: avail_counts,
        is_available: is_available,
        discount_type: discount_type,
        discount: discount,
        hotel_id: hotel_id,
      });
      await newOffer.save();
      res.json({ msg: "Successfully created new Offer!" });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getOffers: async (req, res) => {},
  getOffersByUser: async (req, res) => {
    try {
      const offers = await Offer.findMany({ user_id: req.user.id });
      res.json(offers);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getOffersByHotel: async (req, res) => {
    try {
      const offers = await Offer.findMany({ hotel_id: req.body });
      res.json(offers);
    } catch (error) {
      res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = offerControllers;
