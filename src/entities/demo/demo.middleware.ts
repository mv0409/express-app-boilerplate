import { Request } from "express";

export const demoMiddleware = async (req: Request) => {
  req.body = "HelloWorld!";
  console.log("demoMiddleware");
};
