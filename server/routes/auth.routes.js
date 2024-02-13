const router = require("express").Router();
const authControllers = require("../controllers/auth/auth.controllers.js");
const auth = require("../middleware/user.auth.middleware.js");

// Register user
router.post("/register", authControllers.register);

// Login user
router.post("/login", authControllers.login);

// Verify user
router.get("/verify", authControllers.verifiedToken);

module.exports = router;
