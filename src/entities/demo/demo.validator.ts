import { Request } from "express";

export const demoValidator = async (req: Request) => {
  req.body = "HelloWorld!";
};
