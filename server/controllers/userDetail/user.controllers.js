const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../db/models/user");

const userControllers = {
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
      const {
        username,
        email,
        password,
        birthday,
        gender,
        mobile_number,
        img_url,
      } = req.body;
      await User.findByIdAndUpdate(
        { _id: req.user.id },
        {
          username: username,
          email: email,
          password: password,
          birthday: birthday,
          gender: gender,
          mobile_number: mobile_number,
          img_url: img_url,
        }
      );
      res.json({ msg: "User updated successfully." });
    } catch (err) {
      res.status(400).json({ msg: err.message });
    }
  },
  deleteUser: async (req, res) => {
    try {
      await User.findByIdAndDelete({ _id: req.user.id });
      res.json({ msg: "User deleted successfully." });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userControllers;
