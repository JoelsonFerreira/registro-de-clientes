import express, { type RequestHandler } from "express"

const router = express.Router()

import { clientsRoutes } from "./middlewares/clients"

export type Route = {
  method: "post" | "get" | "delete" | "patch" | "put",
  path: string,
  controller: RequestHandler,
}

function registerRoute(allRoutes: { basePath: string, routes: Route[] }[]) {
  allRoutes.forEach(({
    basePath,
    routes
  }) => {
    routes.forEach(({
      controller,
      method,
      path
    }) => {
      router[method](`${basePath}${path}`, controller)
    })
  })
}

registerRoute([
  {
    basePath: "/clients",
    routes: clientsRoutes,
  }
])

export default router