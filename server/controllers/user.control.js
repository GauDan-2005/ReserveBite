const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../db/models/user");

const userControls = {
  getUser: async (req, res) => {
    try {
      const user = await User.findById({ _id: req.user.id });
      if (user) res.json(user);
      res.json({ msg: "User not found." });
    } catch (err) {
      res.status(404).json({ msg: err.message });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findById({ _id: req.user.id });
      // const{ username, }
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  deleteUser: async (req, res) => {},
};

module.exports = userControls;
