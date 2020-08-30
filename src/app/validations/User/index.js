const { celebrate, Segments, Joi } = require("celebrate");

module.exports = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    telephone: Joi.string().required(),
  }),
});
