const userController = require("../controllers/userController.js");

const router = require("express").Router();
router.get("/allUsers", userController.getAllUsers);
router.get("/published", userController.getPublishedUser);

router.get("/:id", userController.getOneUser);
// router.put("/:id", userController.updateUser);
// router.delete("/:id", userController.deleteUser);

module.exports = router;
