import { ErrorHandler } from "./error-handler";

export const throwBadRequestError = (message: string): never => {
  throw new ErrorHandler(400, message);
};

export const throwUnauthorizedError = (message: string): never => {
  throw new ErrorHandler(401, message);
};

export const throwForbiddenError = (message: string): never => {
  throw new ErrorHandler(403, message);
};

export const throwNotFoundError = (message: string): never => {
  throw new ErrorHandler(404, message);
};

export const throwConflictError = (message: string): never => {
  throw new ErrorHandler(409, message);
};
