const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Offer = require("../db/models/offer");

const offerControl = {
  createOffer: async (req, res) => {},
  getOffer: async (req, res) => {},
  getOfferByUser: async (req, res) => {},
  getOfferByHotel: async (req, res) => {},
};
