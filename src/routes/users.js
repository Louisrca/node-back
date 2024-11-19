const express = require("express");
const router = express.Router();

const { getUser } = require("../controllers/UserControllers");
const verifyToken = require("../middleware/jwt");

router.get("/me", verifyToken, getUser);

module.exports = router;
