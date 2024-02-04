const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Booking = require("../db/models/booking");

const bookingControl = {
  getBooking: async (req, res) => {},
  getBookingByUser: async (req, res) => {},
  getBookingByHotel: async (req, res) => {},
};
