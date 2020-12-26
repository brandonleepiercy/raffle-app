const Sequelize = require('sequelize');

const sequelize = new Sequelize("raffle_db", "root", "sqlROOTpW##", {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
});

module.exports = sequelize;