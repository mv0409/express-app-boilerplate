import { Request } from "express";

export const sayHelloWorld = async (req: Request) => {
  return req.body;
};
