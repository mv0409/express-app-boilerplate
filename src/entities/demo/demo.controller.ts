import { Request } from "express";
import { IController } from "../../common/types";
import * as demoService from "./demo.service";

export const demoController = async (req: Request): Promise<IController> => {
  const data = await demoService.sayHelloWorld(req);

  return { statusCode: 200, resBody: data };
};
