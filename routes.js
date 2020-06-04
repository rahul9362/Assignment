'use strict';
const controller = require('./controller');
// define routes
module.exports = function (app) {

    app.get('/', (req, res) => { res.json({ success: true, message: "Main#index" }) });
    app.post('/upload', controller.upload);

    app.get('/search/:user', controller.search);
    app.get('/fetch/:userId', controller.fetch);

    // If nothing else matches, return 404
    app.use(function (req, res) {
        return res.status(404).json({
            success: false,
            error: {
                code: "E_NOT_FOUND",
                message: "Unknown request!"
            }
        });
    });

};
