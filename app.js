var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');

var Email = require('./api/email/email.js');


var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var projectfyRouter = express.Router();

contactUsRouter.route('/contactus').post(function(req,res){
    
    var emailOptions =  req.body.emailOptions;
    Email.sendEmail(emailOptions);
    
});



app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('api'));

app.use('/api',contactUsRouter);


app.get('/', function(req,res){
   
   console.log("sendiing html for the path /");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err){
    console.log("running server on from gulp port:::::::"+port);
});
    