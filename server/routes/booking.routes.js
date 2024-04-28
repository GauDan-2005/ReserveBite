const router = require("express").Router();
const { bookingController } = require("../controllers/bookingDetail/index.js");
const auth = require("../middleware/user.auth.middleware.js");

// create booking
router.route("/create").post(auth, bookingController.createBooking);

// get bookings by user
router.route("/user").get(auth, bookingController.getBookingsByUser);

// get bookings by hotel
router.route("/hotel").get(auth, bookingController.getBookingsByHotel);

router
  .route("/:id")
  .get(auth, bookingController.getBookingDetail) //get booking details
  .put(auth, bookingController.editBooking) //update booking details
  .delete(auth, bookingController.deleteBooking); //delete booking

module.exports = router;
