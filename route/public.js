const express = require("express");
const userController = require("../controller/user.js")
const router = express.Router();

const {
    register,
    login
} = userController

router.route("/users/register")
.post(register)
router.route("/users/login")
.post(login)

module.exports = router;
