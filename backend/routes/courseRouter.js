const courseController = require("../controllers/courseController.js");

const router = require("express").Router();
router.post("/addCourse", courseController.addCourse);
router.get("/allCourses", courseController.getAllCourses);
router.get("/published", courseController.getPublishedCourse);

router.get("/:accessCode", courseController.getOneCourse);
router.put("/:accessCode", courseController.updateCourse);
router.delete("/:accessCode", courseController.deleteCourse);

module.exports = router;
