import { NextFunction, Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export function validateDto(validationSchema: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await validationPipe(validationSchema, {
      ...req.body,
      ...req.params,
    });
    if (!result.success) return res.status(400).send(result.errors);
    next();
  };
}

export async function validationPipe(
  schema: new () => {},
  requestObject: object
) {
  const transformedClass = plainToInstance(schema, requestObject);
  const errors = await validate(transformedClass);

  return {
    success: errors.length === 0,
    errors: errors.length > 0 ? formatErrors(errors) : [],
  };
}

export const formatErrors = (validationErrors: any[]) => {
  return validationErrors.map((error: any) => {
    const targetValues =
      error.children && error.children.length > 0
        ? error.children[0].constraints
        : error.constraints;

    return Object.values(targetValues)[0];
  });
};
