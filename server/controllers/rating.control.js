const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Rating = require("../db/models/rating");

const ratingControl = {
  getRating: async (req, res) => {},
  createRating: async (req, res) => {},
  getRatingByUser: async (req, res) => {},
  getRatingByHotel: async (req, res) => {},
};
