const db = require("../models");

//create main Model

const User = db.user;

const addUser = async (req, res) => {
  let info = {
    email: req.body.email,
    password: req.body.password,
    userType: req.body.userType,
    published: req.body.published ? req.body.published : false,
  };

  console.log(info);
  try {
    const user = await User.create(info);
    res.status(200).send(user);
  } catch (e) {
    console.log(e);
    res.status(405).send({ error: e });
  }

  console.log(user);
};

const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  res.send(users);
};

const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  res.send(user);
};

const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await User.update(req.body, { where: { id: id } });
  res.status(200).send(user);
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  await User.destroy({ where: { id: id } });
  res.status(200).send("User deleted");
};

const getPublishedUser = async (req, res) => {
  const users = await User.findAll({ where: { published: true } });
  res.status(200).send(users);
};

module.exports = {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  getPublishedUser,
};
