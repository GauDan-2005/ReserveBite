const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Address = require("../../db/models/address");

const addressController = {
  findAddressesByUser: async (req, res) => {},
  findAddressesByHotel: async (req, res) => {},
  editAddress: async (req, res) => {},
};

module.exports = addressController;
