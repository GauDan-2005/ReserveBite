const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const address = require("../db/models/address");

const addressControl = {
  createAddress: async (req, res) => {},
  getAddress: async (req, res) => {},
  findAddressesByUser: async (req, res) => {},
  findAddressesByHotel: async (req, res) => {},
  editAddress: async (req, res) => {},
};
