const nodemailer = require("nodemailer");
import NextCors from "nextjs-cors";

export default async function sendMessage(req, res) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200,
  });

  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_MAILUSER,
      pass: process.env.NEXT_PUBLIC_MAILPASS,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: `kennyytran95@gmail.com`,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p>
      <p><strong>Name: </strong> ${name} </p>
      <p><strong>Email: </strong> ${email} </p>
      <p><strong>Phone: </strong> ${phone} </p>
      <p><strong>Message: </strong> ${message} </p>
      `,
    });
    console.log(`Message Sent`, emailResponse.messageId);
  } catch (err) {
    console.log(err);
  }
  res.status(200).send("Successfully emailed Kenny Tran! Woot woot!");
}
