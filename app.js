var express = require('express'),
    mongoose = require('mongoose'),
    path = require('path'),
    bodyParser = require('body-parser');

var Email = require('./api/email/email.js');

var LOG = require('./api/log/log.js');


var app = express();

app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var contactUsRouter = express.Router();

contactUsRouter.route('/contactus').post(function(req,res){
    
    var emailOptions =  req.body.emailOptions;
    console.log(JSON.stringify(emailOptions));
    Email.sendEmail(emailOptions);
    
});


var emailOptions = {};
emailOptions.fromEmail = "vinorannadi@gmail.com";
Email.sendEmail(emailOptions);


app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.static('api'));

app.use('/api',contactUsRouter);


app.get('/', function(req,res){
   
   LOG.info("sendiing html for the path /");
   res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err){
    LOG.info("running server on from gulp port:::::::"+port);
});
    