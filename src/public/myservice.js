var Book = require('../models/bookmodel');
module.exports = function(app) {

    app.post('/myservices', function(req, res) {
        Book.find({userid: req.body.userid}, function(err, book) {
            if (book) {
                res.send({"status": 1, "data": book});
            } else {
                res.send({"status": 0, "data": "You haven't booked any service."});
            }
        })
    })
}