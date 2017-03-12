var nodemailer = require('nodemailer');

var Email = function() {};

Email.prototype.log = function(logText) {
    console.log('Email Service:::::'+logText);
};

Email.prototype.sendEmail = function(emailOptions) {

    var module = emailOptions.module;
    
        mailOptions = {
        from: 'mytesttest90@gmail.com', // sender address
        to: emailOptions.fromEmail, // list of receivers
        subject: 'Contact US', // Subject line
        html: '<P>FROM EMAIL: '+emailOptions.fromEmail+"<br><br><h2>Description</h2>:<p>"+emailOptions.fromEmail; // html body
    };
    

    console.log('mail options:::::::'+JSON.stringify(mailOptions));

    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}


// create reusable transporter object using the default SMTP transport
//you need to provide your gmail authentication to send emails
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'mytesttest90@gmail.com',
        pass: 'test9test'
    }
});


module.exports = new Email();