var express = require('express');
var mongoose = require('mongoose');
var moment = require('moment');
var cors = require('cors')
var bodyParser = require('body-parser');
var mongo = require('mongodb')
const bcrypt = require('bcryptjs');
const randtoken = require('rand-token');
var nodemailer = require('nodemailer');
var User = require('./src/models/usermodel');
var db = require('./config/dbinfo');
var app = express();
app.set('view engine', 'ejs');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(express.static('admin'));
app.use(express.static('views'));
app.use('/images',express.static('Uploads'));
mongoose.connect(db.url);
require('./src/public/router')(app);
require('./src/public/contactrouter')(app);
require('./src/public/bookrouter')(app);
require('./src/public/newdescript')(app);
require('./src/public/myservice')(app);
require('./src/public/Imagecontroller')(app);
require('./src/public/profileupdate')(app);
require('./src/public/allservices')(app);
require('./src/public/passwordResetController')(app);

//Admin Controllers
require('./src/admin/feedbackmail')(app);
require('./src/admin/userbookedservices')(app);
require('./src/admin/adminregistration')(app);
require('./src/admin/adminlist')(app);
require('./src/admin/vendorlist')(app);
require('./src/admin/userlist')(app);
require('./src/admin/newsubserviceaddition')(app);


/*app.get('/last24hrs', function(req, res){
	let ObjectId    = require('mongodb').ObjectID;

User.find({
    _id: {
        $gt: ObjectId.createFromTime(Date.now() / 1000 - 24 * 60 * 60)
    }
}, (err, result) => {
    console.log(err || result);
});

})*/
    


let port = 3000;
app.listen(port, function() {
    console.log('Do u wanna know port no: @' + port)
})

























//Servicecity provides very good 
//services at your door step. I 
// have booked plumbing service within 
// no time the people have reached the 
// location, done inspection and later 
//on the service has been done very quickly 
// and professionally.

//we have booked cleaning service for my house the service is quite good and plumbing 
//service for kitchen. They have resolved all the issues which i have notified to them.
//Try servicecity for all household services.

//i have called them to order a cake for my parents anniversary, 
//They have  sent all the cake pictures for selection and later on they deliverd quickly. 

//i need a photographer for my event in pragati nagar. Immediately i contacted them, 
//the team had sent me the quotations and later on i compared it with outside photographers 
//and the cost is low. the service was good.

//servicecity has provided emergency service for me, services are pretty good and more. 
//painted my office professionly,cleaned my office. how ever the team is perfect.


//interior design, manicure, mehandi services