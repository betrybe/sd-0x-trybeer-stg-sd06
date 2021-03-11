const pool = require('./connection');

const getUser = async (email) => {
  const [user] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);
  return user;
};

module.exports = {
  getUser,
};
