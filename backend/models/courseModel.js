module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("course", {
    accessCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseName: {
      type: DataTypes.STRING,
    },
    courseDescription: {
      type: DataTypes.TEXT,
    },
    addedTime: {
      type: DataTypes.DATE,
    },
    durationInMinutes: {
      type: DataTypes.INTEGER,
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
