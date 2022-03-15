module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40f4285add4ac58c8b549267b7107fef'),
  },
});
