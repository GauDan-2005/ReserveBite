const addressRouter = require("./address.routes");
const authRouter = require("./auth.routes");
const hotelRouter = require("./hotel.routes");
const bookingRouter = require("./booking.routes");
const foodRouter = require("./food.routes");
const offersRouter = require("./offer.routes");
const userRouter = require("./user.routes");

const router = {
  addressRouter: addressRouter,
  authRouter: authRouter,
  bookingRouter: bookingRouter,
  hotelRouter: hotelRouter,
  foodRouter: foodRouter,
  offerRouter: offersRouter,
  userRouter: userRouter,
};

module.exports = router;
