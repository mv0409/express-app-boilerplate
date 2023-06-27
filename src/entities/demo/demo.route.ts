import { Router } from "express";
import { demoController } from "./demo.controller";
import { demoValidator } from "./demo.validator";
import { addCallbackToRouterArgs } from "../../routes/router-args";

const demoRouter = Router();

demoRouter.get("/demo", demoValidator, demoController);

addCallbackToRouterArgs(demoRouter);

export { demoRouter };
