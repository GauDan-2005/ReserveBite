const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const dotenv = require("dotenv");
const connect = require("./db/config/connect");

const routes = require("./routes/index");

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// ROUTES --------------------------------
app.use("/auth", routes.authRouter);
app.use("/address", routes.addressRouter);
app.use("/hotel", routes.hotelRouter);
app.use("/booking", routes.bookingRouter);
app.use("/food", routes.foodRouter);
app.use("/offer", routes.offerRouter);

// DB-CONNECTION --------------------------------
app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
