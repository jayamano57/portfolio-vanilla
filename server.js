const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var cors = require("cors");
require("dotenv").config();

app.listen(port, () => {
  console.log(`running on port: ${port}`);
});

app.use(cors());
app.options("*", cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/api/mailer", function(req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODE_EMAIL,
      pass: process.env.NODE_PASS
    }
  });

  const mailOptions = {
    from: process.env.NODE_EMAIL,
    to: process.env.NODE_EMAIL,
    subject: `Portfoli Site Message - by ${req.body.name}`,
    text: req.body.message
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      res.send(error);
    } else {
      res.send(`Email sent: ${info.response}`);
    }
  });
});
