const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Hotel = require("../db/models/hotel");

const hotelControl = {
  getHotel: async (req, res) => {},
  getHotels: async (req, res) => {
    // type: near_by
    // type: search
    // type: filter
    // type: all
    // type: featured
    // type: recommended
  },
};
