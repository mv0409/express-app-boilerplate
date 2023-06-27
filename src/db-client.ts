import { Client, ClientConfig } from "pg";

export const dbClient = async (DATABASE: ClientConfig) => {
  try {
    const client = new Client(DATABASE);
    await client.connect();
    /* eslint-disable-next-line no-console */
    console.log("✔️  Database connected");
    return client;
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log("❌  Database connect error :", error);
  }
};
