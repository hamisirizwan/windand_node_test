const { Sequelize } = require("sequelize");

const { DBHOST, DBNAME, DBUSER, DBPASS } = process.env;
const db = new Sequelize(DBNAME, DBUSER, DBPASS, {
  host: DBHOST,
  dialect: "postgres",
});

module.exports = db;
