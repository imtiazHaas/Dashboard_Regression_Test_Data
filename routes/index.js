const express = require("express");
const authController = require("../controllers/signinController/authController");
const apiController = require("../controllers/QA-TestOrg/SetUp/apiController");

const router = express.Router();

router.post("/authenticate", authController.authenticate);
router.post("/accessProtectedEndpoint", apiController.accessProtectedEndpoint);

module.exports = router;
