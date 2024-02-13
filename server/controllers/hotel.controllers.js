const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Hotel = require("../db/models/hotel");

const hotelControllers = {
  getHotel: async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.body.hotel_id);
      if (!hotel) return res.status(404).json({ msg: "Hotel not found." });
      res.json(hotel);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getHotels: async (req, res) => {
    const { type } = req.query;

    switch (type) {
      case "all":
        try {
          const hotels = await Hotel.find();
          res.json(hotels);
        } catch (err) {
          res.status(400).json({ msg: err.message });
        }

        break;

      case "search":
        try {
          const { query } = req.query;
          const hotels = await Hotel.find({
            $or: [
              { name: { $regex: query, $options: "i" } },
              { description: { $regex: query, $options: "i" } },
            ],
          });
          res.json(hotels);
        } catch (err) {
          res.status(400).json({ msg: err.message });
        }
        break;

      case "filter":
        break;

      case "near_by":
        break;

      case "featured":
        try {
          const featuredHotels = await Hotel.find({ tags: "featured" });
          res.json(featuredHotels);
          break;
        } catch (err) {
          res.status(400).json({ msg: err.message });
        }
        break;

      case "recommended":
        break;

      default:
        break;
    }
  },
};

module.exports = hotelControllers;
