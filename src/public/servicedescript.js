module.exports = function(app) {

    app.post('/servicedescript', function(req, res) {
        Servicedescripts.findOne({servicename: req.body.servicename}, 
            function(err, servicedescript) {
            if (servicedescript) {
                res.send({"status": 1, "data": servicedescript});
            } else {
                res.send({"status": 0, "data": "services no found"});
            }
        })
    })
}