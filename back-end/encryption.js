const bcrypt = require("bcryptjs");

const encrypt = (str) => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(str, salt);
};

const compare = (plain, hash) => {
  return bcrypt.compareSync(plain, hash);
};

module.exports = { encrypt, compare };
