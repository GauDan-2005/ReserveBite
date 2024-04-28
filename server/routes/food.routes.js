const router = require("express").Router();
const { foodController } = require("../controllers/foodDetail/index.js");
const auth = require("../middleware/user.auth.middleware.js");

// create food item
router.route("/create").post(auth, foodController.createFood);

// get food items
router.route("/").get(foodController.getFoods);

router
  .route("/:id")
  .get(foodController.getFood) //get food item details
  .put(auth, foodController.updateFood) //update food item details
  .delete(auth, foodController.deleteFood); //delete food item

module.exports = router;
