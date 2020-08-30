const knex = require("knex");
const configuration = require("../../knexfile");

const config =
  process.env.NODE_DB === "prod"
    ? configuration.production
    : configuration.development;

const connection = knex(config);

module.exports = connection;
