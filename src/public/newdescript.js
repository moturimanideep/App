var Servicedescript = require('../models/newdescript');
module.exports = function(app) {
    app.post('/newdescript', function(req, res) {
        Servicedescript.create({
            servicename: req.body.servicename,
            servicetypes: req.body.servicetypes
        }, function(err, servicedescript) {
            if (servicedescript) {
                res.send("New service description added sucessfully");
            } else {
                res.send("Failed to add description");
            }

        })
    })

    app.post('/servicedescript', function(req, res) {
        Servicedescript.findOne({servicename: req.body.servicename}, 
            function(err, servicedescript) {
            if (servicedescript) {
                res.send({"status": 1, "data": servicedescript});
            } else {
                res.send({"status": 0, "data": "Service description not found in db."});
            }
        })
    })
}
