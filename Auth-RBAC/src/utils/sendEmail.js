const nodemailer = require("nodemailer");
require("dotenv").config({ path: "../.env" }); 


const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS, 
  },
});

const sendVerificationEmail = async (email, token) => {
  const verificationLink = `http://localhost:5000/api/users/verify-email/${token}`;

  const mailOptions = {
    from: '"YourApp" <no-reply@yourapp.com>',
    to: email,
    subject: "Verify Your Email",
    html: `<p>Click the link to verify your email:</p>
           <a href="${verificationLink}">${verificationLink}</a>`,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;
