var nodemailer = require('nodemailer');

var sendmail = function (mailParameters) {
  var name = mailParameters.firstName+mailParameters.lastName;
  var mail = mailParameters.mail;
  var subject  = mailParameters.subject;
  var msg = mailParameters.msg;
  var html = `<h2 style="font-weight: 100;">You got this message from ${name}.</h2>
              <div style="margin-bottom: 15px;">Receipient Mail : ${mail}.</div>
              <div>Message from this person,</div>
              <p>${msg}</p>`;
  var text = `You got the mail from ${name}. ${name} Mail Address is ${mail}. Message from this person ${msg}.`;

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'FromYourPersonalWebsite@gmail.com',
      pass: 'mypersonalwebsitemailpwd'
    }
  });

  var mailOptions = {
    from: 'umarmthariq@gmail.com',
    to: 'umarthariq@gmail.com',
    subject: subject,
    html: html
  };
  // Async Function
  transporter.sendMail(mailOptions, (err, info)=>{
    if(err){
      console.log(err);
    }
    else{
      console.log('Email Sent to '+ info.response);
    }
  });
  return true;
};

module.exports = {
  sendmail: sendmail
}
