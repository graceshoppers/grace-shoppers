const Sequelize = require("sequelize");
module.exports = new Sequelize(process.env.DATABASE_URI, "", "", {
  logging: false,
  dialect: "postgres"
});
