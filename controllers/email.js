import { transporter } from "../lib/mailing.js";

export const sendEmail = (req, res) => {
  let mailoptions = {
    from: process.env.EMAIL,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.text,
  };
  console.log(req.body.text, req.body.email, req.body.subject, "req body ");
  transporter.sendMail(mailoptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.json({ message: "email sent" });
};
