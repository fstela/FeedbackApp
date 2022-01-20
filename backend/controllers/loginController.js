const Joi = require("joi");
const db = require("../models");
const auth = require("../service/auth");
const helpers = require("../helpers");

const User = db.user;

const register = async (req, res) => {
  const registerSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    userType: Joi.string().valid("student", "teacher").required(),
  });

  const validationResult = registerSchema.validate(req.body);

  if (validationResult.error !== undefined) {
    res.status(400).json({
      error: helpers.collectValidationError(validationResult.error),
    });
    return;
  }

  const validData = validationResult.value;

  let existingUser = await User.findOne({ where: { email: validData.email } });
  if (existingUser) {
    res.status(400).json({
      error: "Email already registered",
    });
    return;
  }

  try {
    const hashOfPassword = await auth.hashPassword(validData.password);
    const user = await User.create({
      email: validData.email,
      password: hashOfPassword,
      userType: validData.userType,
    });

    res
      .status(201)
      .json({ token: auth.generateJwtToken(user), userType: user.userType });
  } catch (e) {
    console.log(e);
    // database error
    res.sendStatus(500);
    return;
  }
};

const INVALID_LOGIN_DATA_MESSAGE = { error: "Invalid login data" };

const login = async (req, res) => {
  const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const validationResult = loginSchema.validate(req.body);

  if (validationResult.error !== undefined) {
    res.status(400).json({
      error: helpers.collectValidationError(validationResult.error),
    });
    return;
  }
  const validData = validationResult.value;

  let existingUser = await User.findOne({ where: { email: validData.email } });
  if (!existingUser) {
    res.status(400).json(INVALID_LOGIN_DATA_MESSAGE);
    return;
  }

  const isPasswordValid = await auth.isHashOfPassword(
    existingUser.password,
    validData.password
  );

  if (!isPasswordValid) {
    res.status(400).json(INVALID_LOGIN_DATA_MESSAGE);
    return;
  }

  res
    .status(200)
    .json({
      token: auth.generateJwtToken(existingUser),
      userType: existingUser.userType,
    });
};

module.exports = {
  register,
  login,
};
