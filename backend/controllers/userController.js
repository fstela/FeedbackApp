const db = require("../models");

//create main Model

const User = db.user;


const getAllUsers = async (req, res) => {
  let users = await User.findAll({});
  users.map(user => delete user.password);
  res.send(users);
};

const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await User.findOne({ where: { id: id } });
  delete user.password;
  res.send(user);
};

// const updateUser = async (req, res) => {
//   let id = req.params.id;
//   const user = await User.update(req.body, { where: { id: id } });
//   res.status(200).send(user);
// };

// const deleteUser = async (req, res) => {
//   let id = req.params.id;
//   await User.destroy({ where: { id: id } });
//   res.status(200).send("User deleted");
// };

const getPublishedUser = async (req, res) => {
  const users = await User.findAll({ where: { published: true } });
  users.map(user => delete user.password);
  res.status(200).send(users);
};

module.exports = {
  getAllUsers,
  getOneUser,
  getPublishedUser,
};
