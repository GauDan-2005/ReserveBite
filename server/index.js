const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const dotenv = require("dotenv");
const connect = require("./db/config/connect");

const authRoutes = require("./routes/auth.routes");

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
