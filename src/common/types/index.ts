import { NextFunction, Request, Response } from "express";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface IController {
  statusCode: number;
  resBody?: any;
}

export interface IRouteHandler {
  (
    req?: Request,
    res?: Response,
    next?: NextFunction
  ): Promise<void | IController>;
}
