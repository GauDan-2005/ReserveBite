require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
// const userRoute = require("./routes/userRoutes");
// const notesRoute = require("./routes/notesRoute");

// connect to database
const URI = process.env.MONGODB_URL;

mongoose.connect(URI, {}).then(() => {
  console.log("Database connected...");
});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//ROUTES
// app.use("/users", userRoute);
// app.use("/api/notes", notesRoute);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
