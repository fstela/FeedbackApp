const db = require("../models");

//create main Model

const Course = db.course;

const addCourse = async (req, res) => {
  let info = {
    accessCode: req.body.accessCode,
    courseName: req.body.courseName,
    courseDescription: req.body.courseDescription,
    durationInMinutes: req.body.durationInMinutes,
    feedbackSmiley: req.body.feedbackSmiley,
    feedbackFrowney: req.body.feedbackFrowney,
    feedbackSurprised: req.body.feedbackSurprised,
    feedbackConfused: req.body.feedbackConfused,
    published: req.body.published ? req.body.published : false,
  };

  console.log(info);
  try {
    const course = await Course.create(info);
    res.status(200).send(course);
  } catch (e) {
    console.log(e);
    res.status(405).send({ error: e });
  }

  console.log(course);
};

const getAllCourses = async (req, res) => {
  let courses = await Course.findAll({});
  res.send(courses);
};

const getOneCourse = async (req, res) => {
  let id = req.params.accessCode;
  let course = await Course.findOne({ where: { accessCode: id } });
  res.send(course);
};

const updateCourse = async (req, res) => {
  let id = req.params.accessCode;
  const course = await Course.update(req.body, { where: { accessCode: id } });
  res.status(200).send(course);
};

const deleteCourse = async (req, res) => {
  let id = req.params.accessCode;
  await Course.destroy({ where: { accessCode: id } });
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
