var Service = require('../models/servicemodel');
var servicedescript = require('../models/newdescript');
module.exports = function(app) {

    app.post('/serviceadd', (req, res) => {
        Service.create({
            img: req.body.img,
            name: req.body.name,
            type: req.body.type
        }, (err, servicedescript) => {
            if (err) {
                res.send({ "status": 0, "data": "failed to insert" });
            } else {
                res.send({ "status": 1, "data": "sub service insert sucessfully" });
            }
        })
    })

    app.post('/servicedescriptadd', (req, res) => {
        console.log(req.body.servicetypes);
        servicedescript.create({
            servicename: req.body.servicename,
            servicetypes: req.body.servicetypes
        }, (err, servicedescript) => {
            if (err) {
                res.send({ "status": 0, "data": "failed to insert" });
            } else {
                res.send({ "status": 1, "data": servicedescript });
            }
        })
    })



    app.post('/servicedescriptupdate', (req, res) => {
        console.log(req.body.servicetypes);
        servicedescript.update({ servicename: req.body.servicename }, { $addToSet: { servicetypes: { $each: req.body.servicetypes } } }, (err, servicedescript) => {
            if (err) {
                res.send({ "status": 0, "data": "failed to insert" })
            } else {
                res.send({ "status": 1, "data": servicedescript });
            }
        })
    })
}
