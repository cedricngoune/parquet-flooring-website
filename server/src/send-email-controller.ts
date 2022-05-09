import { Request, Response } from "express";
import nodemailer from "nodemailer";

interface IMessage {
  to: string;
  from: string;
  subject: string;
  text: string;
}

export const sendMail = (req: Request, res: Response) => {
  try {
    const body = req.body;
    var mailOptions = {
      from: body.email,
      to: "gabyngoune@yahoo.fr",
      subject: body.subject,
      text: body.message,
      html: body.html,
    };
    const transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f1810fddce8d66",
        pass: "342f5a57997f44",
      },
    });
    transporter.sendMail(mailOptions, async (err, info) => {
      if (err)
        return res.status(400).send({
          reason: err.name,
          message: err.message,
        });

      return res.status(200).send({
        message: "Email envoyé, vous allez être recontacté très vite!",
      });
    });
  } catch (error) {
    return res.status(500).send({
      message: "Error",
    });
  }
};
