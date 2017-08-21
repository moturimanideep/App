
var User = require('../models/usermodel');
module.exports = function(app){
var multer = require('multer');
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
    }).single('userPhoto');

    /** API path that will upload the files */
    app.post('/upload', function(req, res) {
        upload(req, res, function(err) {
            User.findOneAndUpdate({ _id: req.query._id }, { $set: { profilepic: req.file.filename } }, { new: true }, function(err, user) {
                if (user) {
                    res.send(user);
                    console.log(user);
                } else {
                    throw error;
                }
            })
            if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
        });
    });
    app.get('/uploads', function(req, res){
        res.render('uploadimage.ejs');
    })
}