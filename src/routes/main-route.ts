import { Express } from "express";
import { demoRouter } from "../entities/demo/demo.route";

export const loadRoutes = (app: Express) => {
  app.use(demoRouter);
};
