const idv4 = require("uuidv4");
const MailProvider = require("../../providers/Mail");
const connection = require("../../../database/connection");

module.exports = {
  async create(request, response) {
    try {
      const { name, email, telephone } = request.body;

      const mail = new MailProvider();

      const message = {
        to: { name: "Bruno Alcantara", email: "brunoalcantarajc@gmail.com" },
        from: { name, email },
        subject: "Meu assunto!!!",
        body: `<p style="color:#555;">Olá ${name}! Seja bem-vindo a nossa plataforma!</p>`,
      };

      await mail.sendMail(message);

      const userExists = await connection("users")
        .where("email", email)
        .select("id")
        .first();

      if (userExists) {
        return response
          .status(203)
          .json({ message: "Este e-mail já está cadastrado!" });
      }

      const newId = idv4.uuid();
      const data = { id: newId, name, email, telephone };
      await connection("users").insert(data);
      return response.json(data);
    } catch (error) {
      console.error(error);
      return response.status(401).json({ message: error.message });
    }
  },

  async index(request, response) {
    try {
      const users = await connection("users").select("*");
      return response.json(users);
    } catch (error) {
      console.error(error);
      return response.status(401).json({ message: error.message });
    }
  },

  async show(request, response) {
    try {
      const { id } = request.params;
      const user = await connection("users")
        .where("id", id)
        .select("*")
        .first();

      if (!user)
        return response
          .status(400)
          .json({ message: "Usuário não encontrado!" });

      return response.json(user);
    } catch (error) {
      console.error(error);
      return response.status(401).json({ message: error.message });
    }
  },
};
