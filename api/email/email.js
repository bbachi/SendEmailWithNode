var nodemailer = require('nodemailer');

var Email = function() {};



Email.prototype.sendEmail = function(emailOptions) {
   // console.log('email'+emailOptions.fromEmail);
    


 var module = emailOptions.module;
   
            mailOptions = {
            from: 'mytesttest90@gmail.com', // sender address
            to: emailOptions.toEmail, // list of receivers
            subject: 'Contact Us', // Subject line
            html: '<h2>Name: '+emailOptions.senderNameFirst+' '+emailOptions.senderNameLast+'</h2><br><h3> Email: '+emailOptions.senderEmail+'</h3><br><p> Subject: '+emailOptions.subject+'</p>'
        };

 


    

    console.log('mail options:::::::'+JSON.stringify(mailOptions));


    transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
       // console.log('Message %s sent: %s', info.messageId, info.response);
    });
     return "Your response is being evaluated, we'll contact you soon.";
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