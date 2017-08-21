var User = require('../models/usermodel');
module.exports = (app) => {
	app.post('/userlist', (req, res) => {
		User.find({role: req.body.role}, (err, user) => {
			if(!user){
				res.send({"status": 0, "data": "Failed in finding the user list."});
			}else{
				res.send({"status": 1, "data": user});
				
			}
		})
	})
}