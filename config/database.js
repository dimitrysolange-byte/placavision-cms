module.exports = ({ env }) => ({
  connection: {
    client: 'mongo',
    connection: {
      uri: env('DATABASE_URL'),
      database: 'placavision-cms',
    },
  },
});
