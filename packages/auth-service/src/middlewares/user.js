const Joi = require('joi');
const bcrypt = require('bcryptjs');

exports.validationUserData = async (req, res, next) => {
  const schema = {
    username: Joi.string()
      .alphanum()
      .min(6)
      .max(30)
      .required(),
    password: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,30}$/)
      .required(),
    confirmPassword: Joi.string()
      .valid(Joi.ref('password'))
      .required(),
  };

  try {
    const data = await Joi.validate(req.body, schema, {
      abortEarly: false,
    });
    delete data.confirmPassword;
    req.body = data;
    return next();
  } catch (error) {
    const joiError = error.details.map(detail => ({
      message: detail.message.replace(/['"]/g, ''),
      type: detail.type,
    }));

    /*
      const customError = {
        status: 'failed',
        error: 'Invalid request data. Please review request and try again.'
      };
    */
    return res.status(400).send(joiError);
  }
};

exports.hashPassword = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    req.body.password = hash;
    return next();
  } catch (error) {
    return res.status(500).send({ message: 'something is wrong' });
  }
};
