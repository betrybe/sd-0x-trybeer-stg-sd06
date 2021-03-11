const crypto = require('crypto');
const model = require('../models/loginModel.js');

// const emailValido = (email) => {
//   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

//   return regexMail.test(String(email).toLowerCase());
// };

const errors = {
  invalidEmail: 'O campo e-mail deve ter o formato \'email@email.com\'',
  passwordRequired: 'O campo "senha" é obrigatório',
  passwordLength: 'A senha deve possuir 6 ou mais caracteres',
  userNotFound: 'Usuário não cadastrado',
  wrongPassword: 'Senha incorreta',
};

const invalidPassword = (password) => (password === '' || !password);

const validateParams = (email, password) => {
  // if (!emailValido(email)) return { code: 'invalid_data', message: errors.invalidEmail };

  if (invalidPassword(password)) return { code: 'invalid_data', message: errors.passwordRequired };

  if (String(password).length < 6) return { code: 'invalid_data', message: errors.passwordLength };

  return {};
};

const validateUser = (user, password) => {
  const code = 'invalid_user';
  if (user === undefined) return { code, message: errors.userNotFound };
  
  if (user.password !== password) return { code, message: errors.wrongPassword };

  return {};
};

const validationUser = async (body) => {
  const { email, password } = body;
  
  const error = true;
  
  let validations = validateParams(email, password);

  if (validations.code) return { error, ...validations };

  const [user] = await model.getUser(email);

  validations = validateUser(user, password);

  if (validations.code) return { error, ...validations };

  const token = crypto.randomBytes(8).toString('hex');
  const { id, name, role } = user;
  return { token, id, name, email, role, message: 'Token gerado' };
};

module.exports = {
  validationUser,
};
