export const PORT = process.env.PORT || 3000;

export const DATABASE = {
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "postgres",
  port: Number(process.env.DATABASE_PORT) || 5432,
  password: process.env.DATABASE_PASSWORD || "password",
  database: process.env.DATABASE_NAME || "test_1",
};
