const nodemailer = require("nodemailer");

class MailProvider {
  transporter = null;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: "semanaflexivel@gmail.com",
        pass: "semanaflexivel1234",
      },
    });
  }

  async sendMail(name, email) {
    await this.transporter.sendMail({
      from: {
        name: "Equipe Semana Flexível",
        address: "semanaflexivel@gmail.com",
      },
      to: { name: name, address: email },
      subject: "SEMANA FLEXÍVEL",
      html: `<p style="font-size:"24px;color:#000 !important">Olá ${name}! Seja bem-vindo a SEMANA FLEXÍVEL!<br/>
      Acesse o nosso <a style="font-weight:bold; color:#fcbf1e;" href="https://chat.whatsapp.com/JU0PAUbfRueHHCOi2EokaR">Grupo do WhatsApp</a> para obter mais informações sobre a SEMANA FLEXÍVEL!<br/>
      Ou chame o nosso expert LEONARDO VELOSO em seu WhatsApp +51 984713490<br/><br/>
      Equipe Semana Flexível!</p>`,
    });
  }
}

module.exports = MailProvider;
