var User = require('../models/usermodel');
module.exports = function(app) {
	var nodemailer = require('nodemailer');
	const randtoken = require('rand-token');

    app.post('/send', function(req, res) {
        User.findOne({ email: req.body.send }, function(err, email) {
            if (err) {
                res.send({ 'status': 0, 'data': "not valid email" });
            } else {
                let transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'manidmoturi@gmail.com',
                        pass: 'Mani@123'
                    }
                })
                let token = randtoken.generate(10);
                let mailOptions = {
                    from: 'manidmoturi@gmail.com',
                    to: req.body.send,
                    subject: 'password reset',
                    text: "http://localhost:3000/newpassword?Id=" + token
                }
                transporter.sendMail(mailOptions, (error) => {
                    if (error) {
                        return error;
                    } else {
                        User.findOneAndUpdate({ email: req.body.send }, { $set: { token: token } }, { new: true }, function(err, user) {
                            if (user) {
                                res.send({ 'status': 1, 'data': "You have recieved the mail successfully, Please check your mail" });
                            } else {
                                res.send({ 'status': 0, 'data': "You have entered invalid email id" });
                            }
                        })
                    }
                })
            }
        })
    })

    app.post('/newpassword', function(req, res) {
        console.log(req.body)
        
        User.findOneAndUpdate({ token: req.body.Id }, { $set: { password: req.body.password } }, { new: true }, function(err, user) {
            if (err) {
                res.send({ 'status': 0, 'data': "You have failed in updating your password" });
            } else {
                console.log(user);
                res.send({ 'status': 1, 'data': "You have successfully changed your password" });
            }
        })
    })

        app.get('/sendmail', (req, res) => {
            res.render("mailer.ejs");
        })
        app.get('/newpassword', (req, res) => {
            res.render("newpassword.ejs", {"token":req.query.Id})
        })

}
