import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: `${process.env.NODEMAILEREMAIL}`,
    pass: `${process.env.NODEMAILERPASS}`,
  },
});
const sendEmail = async (message) => {
  const info = await transporter.sendMail(message);
  console.log(info);
};

export const emailTemplate = (email, resetLink) => {
  const message = {
    from: `shekhar 👻" <${process.env.NODEMAILEREMAIL}>`, // sender address
    to: email, // list of receivers
    subject: "Reset Password", // Subject line
    text: `please click on the link below to reset your password 
    ${resetLink}`, // plain text body
    html: `<b>please click on the link below to reset your password</b>
    
    <br/>
    <br/>
    <div>${resetLink}</div>
    `, // html body
  };
  sendEmail(message);
};
