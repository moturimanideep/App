/*var User = require('../models/usermodel');*/
module.exports = function(app) {
    var nodemailer = require('nodemailer');
    app.post('/feedbackmail', (req, res) => {
        /*User.findOne({ email: req.body.mailid }, function(err, email) {
            if (err) {
                res.send({ 'status': 0, 'data': "Not a valid Email id" });
            } else {*/
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                        user: 'manidmoturi@gmail.com',
                        pass: 'Mani@123'
                    }
                })
                /*let token = randtoken.generate(10);
                console.log(token)*/
                let mailOptions = {
                    from: 'manidmoturi@gmail.com',
                    to: req.body.email,
                    subject: req.body.subject,
                    text: req.body.message
                }
                /*"Thank you for choosing servicecity, Our team will contact you shortly " + "\n \n \n \n"  + 
                            "With Regards \ " + "\n" + 
                            "Our Team, \ " + "\n" + 
                            "Servicecity, Hyd. \ "
                }*/
                transporter.sendMail(mailOptions, (err) => {
                            if (err) {
                                res.send({ 'status': 0, 'data': "Invalid email id" });
                            } else {
                                res.send({ 'status': 1, 'data': "Mail Sent Successfully" });
                            }
                        })
                    
                
            })
    
}