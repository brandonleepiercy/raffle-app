const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Ticket = sequelize.define("ticket", {
    user: Sequelize.STRING
});

Ticket.sync();

module.exports = Ticket;