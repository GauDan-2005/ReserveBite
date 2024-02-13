const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Booking = require("../db/models/booking");

const bookingControllers = {
  getBookingsByUser: async (req, res) => {
    try {
      const bookingsByUser = await Booking.find({ user_id: req.user.id });
      res.json(bookingsByUser);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },

  getBookingsOfHotel: async (req, res) => {
    try {
      const { hotel_id } = req.body;
      const bookingsByHotel = await Booking.find({ hotel_id: hotel_id });
      res.json(bookingsByHotel);
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  createBooking: async (req, res) => {
    try {
      const {
        booking_date_time,
        guests,
        status,
        table_number,
        orders,
        offers,
        hotel_id,
      } = req.body;
      const user_id = req.user.id;
      const newBooking = new Booking({
        booking_date_time: booking_date_time,
        guests: guests,
        status: status,
        table_number: table_number,
        orders: orders,
        offers: offers,
        hotel_id: hotel_id,
        user_id: user_id,
      });
      await newBooking.save();
      res.json({ msg: "New Booking done successfully." });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
};

module.exports = bookingControllers;
