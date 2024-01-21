import { Router } from "express";
import { demoController } from "./demo.controller";
import { demoMiddleware } from "./demo.middleware";
import { addCallbackToRouterArgs } from "../../routes/router-args";
import { validateDto } from "../../common/middlewares/validation";
import { DemoDto } from "./demo.dto";

const demoRouter = Router();

demoRouter.get("/demo", validateDto(DemoDto), demoMiddleware, demoController);

addCallbackToRouterArgs(demoRouter);

export { demoRouter };
