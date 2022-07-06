const sgMail = require("@sendgrid/mail");

sgMail.sendMultiple(process.env.SGRID_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mahmoud32salamn@gmail.com",
    subject: "Welcome for joining us 😊",
    text: `We re happy ${name} for your subscription and your great trust `,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mahmoud32salamn@gmail.com",
    subject: "We are very sad for your leaving us😌",
    text: `${name} , Can you tell us the reason/s for left us 😥`,
  });
};

module.exports = { sendWelcomeEmail, sendCancelEmail };
