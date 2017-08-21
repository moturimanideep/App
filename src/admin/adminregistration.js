var User = require('../models/usermodel');
module.exports = function(app) {

    app.post('/adminregistration', function(req, res) {
        User.find({$or: [{email: req.body.email}, {username: req.body.email}]}, function(err, result){
            if(result.length != 0){
                res.send({'status': 0, 'data': 'Admin already exists'});
            }
            else{
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            mobile: req.body.mobile
        }, function(err, user) {
            if (err) {
                res.send({'status':0, 'data':'registration failed'});
            } else {
                res.send({'status':1, 'data':'New admin added sucessfully, Please Log in'});
            }
        }) }
        })
    })
}