var Service = require('../models/servicemodel');
module.exports = function(app) {

app.get('/services', function(req, res){
        Service.find({}, function(err, service){
            if(err){
                res.send({'status': 0, 'data': "services not available"});
            } else{
                res.send({'status': 1, 'data': service});
            }
        })
    })

}
