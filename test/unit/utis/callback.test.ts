import { NextFunction, Request, Response } from "express";
import { IController, IRouteHandler } from "../../../src/common/types";
import { callback } from "../../../src/routes/router-handler-callback";
import {
  throwBadRequestError,
  throwNotFoundError,
} from "../../../src/common/error/http-error";

describe("🧪  Router handler callback util function test", () => {
  let req: Request;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const res: Response | any = {
    status: jest.fn().mockReturnThis(),
    send: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  const dummyData = { foo: "bar" };

  test("Should call express next fn inside middleware callback router handler", async () => {
    const middlewareRouter: IRouteHandler = async () => {
      const validate = "hello";
      if (validate !== "hello") throwBadRequestError("Invalid Request");
    };
    const handler = callback(middlewareRouter);
    const data = await handler(req, res, next);

    expect(next).toHaveBeenCalled();
    expect(data).toBeUndefined();
  });

  test("Should throw bad request error inside middleware callback router handler", async () => {
    const middlewareRouter: IRouteHandler = async () => {
      throwBadRequestError("Invalid request");
    };
    const handler = callback(middlewareRouter);
    const data = await handler(req, res, next);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith("Invalid request");
    expect(data).toBeUndefined();
  });

  test("Should call express response inside controller callback router handler", async () => {
    const controllerRouter = async (): Promise<IController> => {
      return { statusCode: 200, resBody: dummyData };
    };
    const handler = callback(controllerRouter);
    const data = await handler(req, res, next);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.send).toHaveBeenCalledWith(dummyData);
    expect(data).toBeUndefined();
  });

  test("Should throw not found error inside controller callback router handler", async () => {
    const dummyError = "Dummy data not found";

    const controllerRouter = async (): Promise<IController> => {
      throwNotFoundError(dummyError);
      return { statusCode: 200, resBody: dummyData };
    };
    const handler = callback(controllerRouter);
    const data = await handler(req, res, next);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.send).toHaveBeenCalledWith(dummyError);
    expect(data).toBeUndefined();
  });

  test("Should throw internal server error inside controller callback router handler", async () => {
    const internalError = "Unexpected error";
    const controllerRouter = async (): Promise<IController> => {
      throw Error(internalError);
    };
    const handler = callback(controllerRouter);
    const data = await handler(req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(internalError);
    expect(data).toBeUndefined();
  });
});
