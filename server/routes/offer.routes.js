const router = require("express").Router();
const { offerController } = require("../controllers/offerDetail/index.js");
const auth = require("../middleware/user.auth.middleware.js");

// create offer
router.route("/create").post(auth, offerController.createOffer);

// get offers
router.route("/user").get(offerController.getOffersByUser);
router.route("/hotel/:id").get(offerController.getOffersByHotel);

router
  .route("/:id")
  // .get(offerController.) //get offer details
  .put(auth, offerController.editOffer) //update offer details
  .delete(auth, offerController.deleteOffer); //delete offer

module.exports = router;
