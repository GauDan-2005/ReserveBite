const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../db/models/user");

const userControl = {
  login: async (req, res) => {},
  register: async (req, res) => {},
  getUser: async (req, res) => {},
  editUser: async (req, res) => {},
};
