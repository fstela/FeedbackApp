const { register } = require("../controllers/loginController.js");
const loginController = require("../controllers/loginController.js");

const router = require("express").Router();

router.post("/register", loginController.register);
router.post("/login", loginController.login);

module.exports = router;