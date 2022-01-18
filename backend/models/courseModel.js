module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("course", {
    accessCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    courseName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    durationInMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feedbackSmiley: {
      type: DataTypes.INTEGER,
    },
    feedbackFrowney: {
      type: DataTypes.INTEGER,
    },
    feedbackSurprised: {
      type: DataTypes.INTEGER,
    },
    feedbackConfused: {
      type: DataTypes.INTEGER,
    },
  });
  return Course;
};
