module.exports = (err, _req, res, _next) => {
  console.error(err);
  const { message, code } = err;
  const errorCodes = ['invalid_data', 'conflict', 'unauthorized_data', 'invalid_user', 'not_found'];
  if (errorCodes.includes(code)) {
    res.status(400).json({ message });
  }
};
