const router = require("express").Router();
const { userController } = require("../controllers/userDetail/index.js");
const auth = require("../middleware/user.auth.middleware.js");

// create user
// router.route("/register").post(auth, userController.createFood);

// get user detail
router.route("/").get(userController.getUser);

router
  .route("/:id")
  //   .get(userController.getFood) //get food item details
  .put(auth, userController.updateUser) //update user details
  .delete(auth, userController.deleteUser); //delete user

module.exports = router;
