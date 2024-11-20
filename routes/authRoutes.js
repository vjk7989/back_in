const express = require("express");
const { signup, login, forgetPassword } = require("../controllers/authController");
const validate = require("../middlewares/validationMiddleware");
const { body } = require("express-validator");

const router = express.Router();

router.post(
    "/signup",
    validate([
        body("email").isEmail(),
        body("password").isLength({ min: 6 }),
    ]),
    signup
);
router.post("/login", login);
router.post("/forget-password", forgetPassword);

module.exports = router;
