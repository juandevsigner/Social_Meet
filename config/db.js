const Sequelize = require("sequelize");

module.exports = new Sequelize("meet", "postgres", "Mariaemma1520", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
});
