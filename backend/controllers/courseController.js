const Joi = require("joi");
const moment = require("moment");
const db = require("../models");
const helpers = require("../helpers");

//create main Model

const Course = db.course;


const addCourse = async (req, res) => {

  const courseSchema = Joi.object({
    accessCode: Joi.string().required(),
    courseName: Joi.string().required(),
    courseDescription: Joi.string().required(),
    durationInMinutes: Joi.number().integer().required(),
  });

  const validationResult = courseSchema.validate(req.body);

  if(validationResult.error !== undefined) {
    res.status(400).json({
        "error": helpers.collectValidationError(validationResult.error)
    });
    return;
  }

  const validData = validationResult.value;

  const existingAccessCode = await Course.findOne({where: {accessCode: validData.accessCode}});
  if(existingAccessCode) {
    res.status(400).json({
      "error": "Access code already used"
    });
    return;
  }

  try {
    const course = await Course.create({
      ...validData,
      feedbackSmiley: 0,
      feedbackFrowney: 0,
      feedbackSurprised: 0,
      feedbackConfused: 0,
      published: true,
    });
    res.status(201).send(course);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
};

const getAllCourses = async (_, res) => {
  let courses = await Course.findAll({});
  // filter expired courses
  courses = courses.filter(course => moment().diff(course.createdAt, 'minutes') <= course.durationInMinutes)
  res.send(courses);
};

const gradeCourse = async(req, res) => {

  const gradeSchema = Joi.object({
    accessCode: Joi.string().required(),
    grade: Joi.string().valid("smiley", "frowney", "surprised", "confused").required(),
  });

  const validationResult = gradeSchema.validate(req.body);
  if(validationResult.error !== undefined) {
    res.status(400).json({
        "error": helpers.collectValidationError(validationResult.error)
    });
    return;
  }

  const validData = validationResult.value;

  const existingCourse = await Course.findOne({where: {id: req.params.id}});
  if(!existingCourse) {
    res.status(404).json({
      "error": "Course not found"
    });
    return;
  }

  console.log(existingCourse.accessCode, validData.accessCode);
  if(existingCourse.accessCode !== validData.accessCode) {
    res.status(401).json({
      "error": "Invalid access code"
    });
    return;
  }

  if(moment().diff(existingCourse.createdAt, 'minutes') > existingCourse.durationInMinutes) {
    res.status(401).json({
      "error": "This feedback session has ended"
    });
    return;
  }


  let updateData 
  switch(validData.grade) {
    case "smiley":
      existingCourse.feedbackSmiley++;
      break;
    case "frowney":
      existingCourse.feedbackFrowney++;
      break;
    case "surprised":
      existingCourse.feedbackSurprised++;
      break;
    case "confused":
      existingCourse.feedbackConfused++;
      break;
  }

  try {
    await existingCourse.save();
    res.sendStatus(200);
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
  
}

// const getOneCourse = async (req, res) => {
//   let id = req.params.accessCode;
//   let course = await Course.findOne({ where: { accessCode: id } });
//   res.send(course);
// };

// const updateCourse = async (req, res) => {
//   let id = req.params.accessCode;
//   const course = await Course.update(req.body, { where: { accessCode: id } });
//   res.status(200).send(course);
// };

// const deleteCourse = async (req, res) => {
//   let id = req.params.accessCode;
//   await Course.destroy({ where: { accessCode: id } });
//   res.status(200).send("Course deleted");
// };

// const getPublishedCourse = async (req, res) => {
//   const courses = await Course.findAll({ where: { published: true } });
//   res.status(200).send(courses);
// };

module.exports = {
  addCourse,
  getAllCourses,
  gradeCourse
  // getOneCourse,
  // updateCourse,
  // deleteCourse,
  // getPublishedCourse,
};
