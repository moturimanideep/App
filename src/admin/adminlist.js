var User = require('../models/usermodel');
module.exports = (app) =>  {
	app.post('/adminlist', (req, res) => {
		console.log(req.body.role);
		User.find({role: req.body.role}, (err, user) => {
			if(!user){
				res.send({"status": 0, "data": "Failed in finding the admin list."});
			}else{
				res.send({"status": 1, "data": user});
				
			}
		})
	})
}