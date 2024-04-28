const router = require("express").Router();
const { ratingController } = require("../controllers/ratingDetail/index.js");
const auth = require("../middleware/user.auth.middleware.js");

// create rating
router.route("/register").post(auth, ratingController.createRating);

// find rating by user
router.route("/user").get(auth, ratingController.getRatingsByUser);

// find rating by hotel
router.route("/hotel").get(auth, ratingController.getRatingByHotel);

router
  .route("/user/:id")
  .get(auth, ratingController.getRating) // find rating details
  .put(auth, ratingController.editRaing) // edit rating
  .delete(auth, ratingController.deleteRating); // delete rating

module.exports = router;
