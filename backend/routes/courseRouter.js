const courseController = require("../controllers/courseController.js");

const router = require("express").Router();
router.post("/", courseController.addCourse);
router.get("/", courseController.getAllCourses);
router.post("/:id/grade", courseController.gradeCourse);
// router.get("/published", courseController.getPublishedCourse);

// router.get("/:accessCode", courseController.getOneCourse);
// router.put("/:accessCode", courseController.updateCourse);
// router.delete("/:accessCode", courseController.deleteCourse);

module.exports = router;
