var Book = require('../models/bookmodel');
module.exports = function(app) {
	let ObjectId    = require('mongodb').ObjectID;
    app.get('/userbookedservices', function(req, res){
        Book.find({_id: {
        $gt: ObjectId.createFromTime(Date.now() / 1000 - 168 * 60 * 60)
    }}, function(err, book){
            if(err){
                res.send({'status': 0, 'data': "services not available"});
            } else{
                res.send({'status': 1, 'data': book});
            }
        })
    })

        //servicestatuschange
        
    app.post('/servicestatuschange', function(req, res){
        Book.findOneAndUpdate({_id: req.body.bookid}, { $set: { servicestatus: req.body.servicestatus }}, {new: true}, function(err, book){
            if(book){
                res.send({'status': 1, 'data': "Completed service sucessfully"});
            } else{
                
                res.send({'status': 0, 'data': "Failed in changing the status of service"});
                
            }
        })
    })
}