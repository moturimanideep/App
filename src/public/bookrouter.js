var Book = require('../models/bookmodel');
var User = require('../models/usermodel');
module.exports = function(app) {
    var nodemailer = require('nodemailer');
    app.post('/book', function(req, res) {
        Book.create({
            userid: req.body.userid,
            servicename: req.body.servicename,
            subservicename: req.body.subservicename,
            address: req.body.address,
            date: req.body.date,
            time: req.body.time,
            username: req.body.username,
            mobile: req.body.mobile
            
        }, function(err, book) {
            if (err) {
                res.send({"status": 0, data: 'Sorry, your service booking failed.'});
            } else {
                res.send({"status": 1, data: 'Thank you, Our team will contact you shortly', 
                          "mobile" : 9553651651});
                /*let transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    auth: {
                    user: 'manidmoturi@gmail.com',
                    pass: 'Mani@123'
                        }
                })
                let mailOptions = {
                    from: 'manidmoturi@gmail.com',
                    to: req.body.mailid,
                    subject: 'Thank you, for choosing Servicecity',
                    text: "Thank you for choosing servicecity, Our team will contact you shortly " + "\n \n \n \n"  + 
                            "Regards \ " + "\n" + 
                            "Our Team, \ " + "\n" + 
                            "Servicecity, Hyd. \ "
                }
                transporter.sendMail(mailOptions, (error) => {
                    if (error) {
                        res.send({ 'status': 0, 'data': "Invalid email id" });
                    } 
                    else {
                        res.send({"status": 1, data: 'Thank you, Our team will contact you shortly', "mobile" : "9553651651"});
                    }
                })*/
                    
                }
            })
    })
}


                        

                            