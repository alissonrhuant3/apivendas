export default {
  jwt: {
    secret: process.env.APP_SECRET,
    expiresIn: process.env.APP_JWT_EXPIRESIN,
  },
};

