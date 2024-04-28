const router = require("express").Router();
const { addressController } = require("../controllers/addressDetail/index.js");
const auth = require("../middleware/user.auth.middleware.js");

// create address
router.route("/register").post(auth, addressController.createAddress);

// find address by user
router.route("/user").get(auth, addressController.findAddressesByUser);

router
  .route("/user/:id")
  // .get(auth, addressController.findAddressByHotel) // find address by hotel
  .put(auth, addressController.editAddress); // edit address

module.exports = router;
