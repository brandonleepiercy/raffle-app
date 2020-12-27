const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/submit.html"));
    });

    app.get("/alienProTestSuitexx!!!manager", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });
};