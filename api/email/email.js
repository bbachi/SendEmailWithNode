var nodemailer = require('nodemailer');

var Email = function() {};

Email.prototype.log = function(logText) {
    console.log('Email Service:::::'+logText);
};

Email.prototype.sendEmail = function(emailOptions) {

    var module = emailOptions.module;
    if(module == 'contactus') {
            mailOptions = {
            from: '', // sender address
            to: emailOptions.fromEmail, // list of receivers
            subject: '', // Subject line
            html: '<p>this is test email</p>' // html body
        };
    }

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
        user: '',
        pass: ''
    }
});


module.exports = new Email();