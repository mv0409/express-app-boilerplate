import express from "express";
import { DATABASE, PORT } from "./config/env";
import { loadRoutes } from "./routes/main-route";
import { dbClient } from "./db-client";

const app = express();

const db = dbClient(DATABASE);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

loadRoutes(app);

const server = app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log(`✔️  App started on port:${PORT}`);
});

export { server, db };
