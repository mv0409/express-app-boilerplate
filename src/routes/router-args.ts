import { IRouter } from "express";
import { callback } from "./router-handler-callback";

export const addCallbackToRouterArgs = (router: IRouter) => {
  router.stack.forEach((layer) => {
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    layer.route?.stack.forEach((routeLayer: any) => {
      if (routeLayer.name !== "<anonymous>") {
        routeLayer.handle = callback(routeLayer.handle);
      }
    });
  });
};
