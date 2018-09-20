let nodemailer = require('nodemailer');

let sendmail = function (mailParameters) {
  let name = mailParameters.firstName + mailParameters.lastName;
  let mail = mailParameters.mail;
  let subject = mailParameters.subject;
  let msg = mailParameters.msg;
  let html = `<h2 style="font-weight: 100;">You got this message from ${name}.</h2>
              <div style="margin-bottom: 15px;">Receipient Mail : ${mail}.</div>
              <div>Message from this person,</div>
              <p>${msg}</p>`;
  let text = `You got the mail from ${name}. ${name} Mail Address is ${mail}. Message from this person ${msg}.`;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'FromYourPersonalWebsite@gmail.com',
      pass: 'esanathamgovtschool2011Batch'
    }
  });

  let mailOptions = {
    from: 'umarmthariq@gmail.com',
    to: 'umarthariq@gmail.com',
    subject: subject,
    html: html
  };
  // Async Function
  transporter.sendMail(mailOptions, (err, info)=>{
    if(err) {
      console.log(err);
    }
    else{
      console.log('Email Sent to ' + info.response);
    }
  });
  return true;
};

module.exports = {
  sendmail: sendmail
};
