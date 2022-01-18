const courseController = require('../controllers/courseController.js');

const router = require('express').Router();
router.post('/addCourse', courseController.addCourse);
router.get('/allCourses', courseController.getAllCourses);
router.get('/published', courseController.getPublishedCourse);



router.get('/:accessToken', courseController.getOneCourse);
router.put('/:accessToken', courseController.updateCourse);
router.delete('/:accessToken', courseController.deleteCourse);

module.exports = router;