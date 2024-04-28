const router = require("express").Router();
const { hotelController } = require("../controllers/hotelDetail/index.js");
const auth = require("../middleware/user.auth.middleware.js");

// create hotel
router.route("/register").post(auth, hotelController.createHotel);

// get hotels
router.route("/").get(hotelController.getHotels);

router
  .route("/:id")
  .get(hotelController.getHotel) //get hotel details
  .put(auth, hotelController.editHotel) //update hotel details
  .delete(auth, hotelController.deleteHotel); //delete hotel

module.exports = router;
