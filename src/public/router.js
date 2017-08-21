var User = require('../models/usermodel');
module.exports = function(app) {

    //user registration
    app.post('/userReg', function(req, res) {
        User.find({$or: [{email: req.body.email}, {username: req.body.email}]}, function(err, user){
        	console.log(user);
            if(user.length){
                res.send({'status': 0, 'data': 'user already exist'});
            }
            else{
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            mobile: req.body.mobile || null
        }, function(err, user) {
            if (err) {
                res.send({'status':0, 'data':'registration failed'});
            } else {
                res.send({'status':1, 'data':'You have registered sucessfully, Please LogIn'});
            }
        }) }
        })
    })
    
    //login 

    app.post('/log', function(req, res) {
        User.findOne({ $and: [
            { $or: [{email: req.body.email}, {username: req.body.email}]}, 
             { password: req.body.password}
             ]
            }, function(err, user) {
            if (!user) {
                res.send({"status": 0, "data": "Invalid username/password"});
            } else {
                res.send({"status": 1, "data": user});
            }
        })
    })    
}

