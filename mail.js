'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    secure: false, // true for 465, false for other ports
    port: 587,
    auth: {
        user: 'ygbavncxljlea5un@ethereal.email',
        pass: '2t8qFaQ7AW3hhM4W1S'
    }
});


exports.sendMail = (to, title, mailBody) => {

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nicolas SAVOIS 👻" <nicolas.savois@talan.com>', // sender address
      to: to, // list of receivers
      subject: title, // Subject line
      text: mailBody, // plain text body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      return {
       messageId: info.messageId,
      // Preview only available when sending through an Ethereal account
       messageURL: nodemailer.getTestMessageUrl(info)
      };

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });

};

exports.mail = () => {

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nicolas SAVOIS 👻" <nicolas.savois@talan.com>', // sender address
      to: 'nicolas.savois@gmail.com', // list of receivers
      subject: 'Hello ✔', // Subject line
      text: 'Hello world?', // plain text body
      html: '<b>Hello world?</b>' // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      // Preview only available when sending through an Ethereal account
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });

};

