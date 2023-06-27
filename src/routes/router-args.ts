import { IRouter } from "express";
import { callback } from "./router-handler-callback";

export const addCallbackToRouterArgs = (router: IRouter) => {
  router.stack.forEach((e) => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    e.route.stack.forEach((e: any) => {
      e.handle = callback(e.handle);
    });
  });
};
