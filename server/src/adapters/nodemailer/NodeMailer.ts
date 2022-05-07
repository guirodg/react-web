import { MailAdapter, SendMailData } from "../MailAdapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7358af154b7d24",
    pass: "751e191a54ef88",
  },
});

export class NodeMailer implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <cliente@gmail.com>",
      to: "Guilherme Rodrigues <guilherme.rddev@gmail.com>",
      subject,
      html: body,
    });
  }
}
// await transport.sendMail({
//     from: "Equipe Feedget <cliente@gmail.com>",
//     to: "Guilherme Rodrigues <guilherme.rddev@gmail.com>",
//     subject,
//     html: [
//       `<div style="font-family: sans-serif; font-size: 16px; color:#111;">`,
//       `<p>Tipo do feedback: ${type}</p>`,
//       `<p>Comentário: ${comment}</p>`,
//       `</div>`,
//     ].join("\n"),
//   });
