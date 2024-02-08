const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Booking = require("../db/models/booking");

const bookingControl = {
  getBookingsByUser: async (req, res) => {
    try {
      const bookingsByUser = await Booking.find({ user_id: req.user.id });
      res.json(bookingsByUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  getBookingsByHotel: async (req, res) => {
    try {
      const bookingsByHotel = await Booking.find({ hotel_id: req.hotel.id });
      res.json(bookingsByHotel);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = bookingControl;
