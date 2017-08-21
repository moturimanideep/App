var Contact = require('../models/contactmodel');
module.exports = function(app) {

    app.post('/contactus', function(req, res) {
        console.log(req.body.userId);
        Contact.create({
            username: req.body.username,
            mobile: req.body.mobile || null,
            email: req.body.email,
            enquirytype: req.body.enquirytype,
            query: req.body.query,
            userId: req.body.userId
            
        }, function(err, user) {
            if (err) {
                res.send({"status": 0, "data": 'Contact failed'});
            } else {
                res.send({"status": 1, "data": 'Thank you, Our team will contact you shortly'});
            }
        })
    })

    app.get('/contactus', (req, res)=>{
        res.render("contactus.ejs");

    })
}