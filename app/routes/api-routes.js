const Ticket = require("../models/ticket.js");

module.exports = function(app) {
    app.get("/api/all", function(req,res) {
        Ticket.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/new", function(req,res) {
        console.log("New ticket created, user: ");
        console.log(req.body.user);

        Ticket.create({
            user: req.body.user
        }).then(function(results) {
            res.end();
        });
    });
};