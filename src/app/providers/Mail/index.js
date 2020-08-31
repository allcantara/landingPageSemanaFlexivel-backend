const nodemailer = require("nodemailer");
const Mail = require("nodemailer/lib/mailer");

class MailProvider {
  transporter = null;

  constructor() {
    // super();

    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0009842a45fdc7",
        pass: "6d40fbf73c100e",
      },
    });
  }

  async sendMail(message) {
    await this.transporter.sendMail({
      to: { name: message.to.name, address: message.to.email },
      from: { name: message.from.name, address: message.from.email },
      subject: message.subject,
      html: message.body,
    });
  }
}

module.exports = MailProvider;
