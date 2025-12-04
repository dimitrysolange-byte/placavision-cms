export default ({ env }) => ({
  connection: {
    client: 'mongodb',
    connection: {
      uri: env('DATABASE_URL'),
      database: 'placavision-cms',
    },
  },
});
