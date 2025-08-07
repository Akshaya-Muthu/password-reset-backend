import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",   // Brevo SMTP server
  port: 587,                       // Brevo SMTP port
  secure: false,                  // must be false for port 587
  auth: {
    user: "942c91001@smtp-brevo.com",  // your Brevo SMTP login
    pass: "7C05h9HG62mYWtqw",          // your Brevo SMTP password
  },
});

export default transporter;
