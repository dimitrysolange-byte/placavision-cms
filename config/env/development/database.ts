export default ({ env }) => ({
  connection: {
    client: "sqlite",
    connection: {
      filename: env("DATABASE_FILENAME", "C:/temp/placavision-strapi-dev.db"),
    },
    useNullAsDefault: true,
    settings: {
      busyTimeout: 60000,
      journalMode: "wal",
    },
  },
});
