const db = require("../models");

//create main Model

const Course = db.course;

const addCourse = async (req, res) => {
  let info = {
    accessToken: req.body.accessToken,
    courseName: req.body.courseName,
    courseDescription: req.body.courseDescription,
    addedTime: req.body.addedTime,
    duration: req.body.duration,
    feedbackSmiley: req.body.feedbackSmiley,
    feedbackFrowney: req.body.feedbackFrowney,
    feedbackSurprised: req.body.feedbackSurprised,
    feedbackConfused: req.body.feedbackConfused,
    published: req.body.published ? req.body.published : false,
  };

  const course = await Course.create(info);
  res.status(200).send(course);

  console.log(course);
};

const getAllCourses = async (req, res) => {
  let courses = await Course.findAll({});
  res.send(courses);
};

const getOneCourse = async (req, res) => {
  let id = req.body.accessToken;
  let course = await Course.findOne({ where: { accessToken: id } });
  res.send(course);
};

const updateCourse = async (req, res) => {
  let id = req.body.accessToken;
  const course = await Course.update(req.body, { where: { accessToken: id } });
  res.status(200).send(course);
};

const deleteCourse = async (req, res) => {
  let id = req.body.accessToken;
  await Course.destroy({ where: { accessToken: id } });
  res.status(200).send("Course deleted");
};

const getPublishedCourse = async (req, res) => {
  const courses = await Course.findAll({ where: { published: true } });
  res.status(200).send(courses);
};

module.exports = {
  addCourse,
  getAllCourses,
  getOneCourse,
  updateCourse,
  deleteCourse,
  getPublishedCourse,
};
