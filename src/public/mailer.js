module.exports = function(app,express,path,nodemailer,transporter,crypto) {

app.post('/send', function(req,res){
    
    var algorithm = 'aes256';
    var key = 'mani';
    var text = req.body.send;
    console.log(crypto);
    var cipher = crypto.createCipher(algorithm, key);
    var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    console.log(encrypted);
    var fmail=req.body.send;
    var link="http://localhost:3000/newpassword?Id="+encrypted;
    
	var mailOptions = {
    from: 'mmanideep@gmail.com', // sender address
    to:    req.body.send, // list of receivers
    subject: 'Password Reset Link', // Subject line
    text: 'Hi', // plain text body
    html: "<a href="+link+"><b>click here Link to Reset Password</b></a><form><input type='hidden'  placeholder='Enter your Email Id' required='required' name='send'/></from>" // html body
};
 transporter.sendMail(mailOptions,  (error, info) => {
    if (error) {
        return console.log(error);
    }
    res.render('mailer.ejs');
    console.log('Message %s sent: %s', info.messageId, info.response); 
    console.log(encrypted);
   
});
});
app.get('/sendmail', (req,res)=>{
    res.render("mailer.ejs");
})
}



/*var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var crypto = require('crypto');
var transporter = nodemailer.createTransport({
     service: 'Gmail',
        auth: {
            user: 'manidmoturi@gmail.com', // Your email id 'dummytest471@gmail.com',
            pass: 'Mani@123' // Your password dummytest3296
        }    
});

app.post('/send', function(req,res){
    
    var algorithm = 'aes256';
    var key = 'mani';
    var text = req.body.send;
    var cipher = crypto.createCipher(algorithm, key);
    var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    var link="http://localhost:3000/newpassword?Id="+encrypted;
    
    var mailOptions = {
    from: 'manideep.digischool@gmail.com', // sender address
    to:    req.body.send, // list of receivers
    subject: 'Password Reset Link', // Subject line
    text: 'Hi', // plain text body
    html: "<a href="+link+"><b>click here Link to Reset Password</b></a><form><input type='hidden'  placeholder='Enter your Email Id' required='required' name='send'/></from>" // html body
};
 transporter.sendMail(mailOptions,  (error, info) => {
    if (error) {
        return console.log(error);
    }
    res.render('mailer.ejs');
    console.log('Message %s sent: %s', info.messageId, info.response); 
    console.log(encrypted);
   
});
}); */