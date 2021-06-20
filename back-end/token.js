const jwt = require("jsonwebtoken");
const KEY = process.env.KEY || "ksdhksd";

function createToken(payload) {
  return jwt.sign(payload, KEY, { expiresIn: 60 * 60 });
}

function verifyToken(token) {
  return jwt.verify(token, KEY);
}

module.exports = { createToken, verifyToken };
