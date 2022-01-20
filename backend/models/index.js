const { Sequelize, DataTypes } = require("sequelize");
const config = require("../config")
const dbConfig = config.db;

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("###############Error " + err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.course = require("./courseModel.js")(sequelize, DataTypes);

db.user = require("./userModel.js")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("resync done");
});

module.exports = db;
