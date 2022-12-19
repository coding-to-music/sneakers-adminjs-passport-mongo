require("dotenv").config;

// Default admin
const DEFAULT_ADMIN = {
  email: process.env.ADMINJS_EMAIL,
  password: process.env.ADMINJS_PASSWORD,
};

const authenticate = async (email, password) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

module.exports = authenticate;
