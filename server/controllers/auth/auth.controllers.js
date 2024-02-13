const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../db/models/user");

const authControllers = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;
      const user = await User.findOne({ email: email });

      if (user) {
        return res.status(400).json({ message: "email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
        is_google_auth: false,
      });

      await newUser.save();
      res.json({ msg: "User successfully registered" });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (!user) return res.status(404).json({ msg: "User does not exist." });

      const matches = await bcrypt.compare(password, user.password);

      if (!matches)
        return res.status(400).json({ msg: "Password is incorrect." });

      const payload = { id: user._id, name: user.username };
      const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "7d",
      });

      res.send({ token });
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {},
  verifiedToken: (req, res) => {
    try {
      const token = req.header("Authorization");
      if (!token) return res.send(false);

      jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        async (err, verifiedUser) => {
          if (err) return res.send(false);

          const user = await Users.findById(verifiedUser.id);
          if (!user) return res.send(false);

          return res.send(true);
        }
      );
    } catch (err) {
      res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = authControllers;
