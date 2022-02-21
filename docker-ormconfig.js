module.exports = {
  "type": "postgres",
  "port": 5432,
  "host": process.env.POSTGRES,
  "username": process.env.POSTGRES_NAME,
  "password": process.env.POSTGRES_PASSWORD,
  "database": process.env.POSTGRES_DATA_BASE_NAME,
  "entities": ["./src/entities/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
