const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Booking = require("../db/models/booking");

const bookingControl = {
  getBookingsByUser: async (req, res) => {},
  getBookingsByHotel: async (req, res) => {},
};
