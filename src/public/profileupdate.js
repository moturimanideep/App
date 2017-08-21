var User = require('../models/usermodel');
module.exports = function(app){
	/*var multer = require('multer');
    	var storage = multer.diskStorage({ //multers disk storage settings
        	destination: function(req, file, cb) {
            	cb(null, './Uploads/');
        	},
        	filename: function(req, file, cb) {
            	var datetimestamp = Date.now();
            	cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]);
        	}
    	});

    var upload = multer({ 
        storage: storage
    }).single('userPhoto');*/



	app.post('/userUpdate', function(req, res) {
        /*upload(req, res, function(err) {*/
        
        User.findOneAndUpdate({ _id: req.body.userid }, { $set: { profilepic: req.body.profilepic, mobile: req.body.mobile, address: req.body.address }}, { new: true }, function(err, user) {
            if (user) {
                res.send({ "status": "1", "data": user });
            } else{
                res.send({"status": "0", "data": "User updation failed"});
            }
        })
    /*})*/
  })

}