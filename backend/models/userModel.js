module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    userType: {
      type: DataTypes.BOOLEAN,
    },
  });
  return User;
};
