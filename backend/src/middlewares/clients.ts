import { z } from "zod"

import { Route } from "../routes";

import { ClientModel } from "../models/ClientsModel";

export const clientSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

export const clientsRoutes: Route[] = [
  {
    path: "/",
    method: "get",
    controller: async (req, res) => {
      res.json(await ClientModel.all());
    },
  },
  {
    path: "/",
    method: "post",
    controller: async (req, res) => {
      const client = await clientSchema.parseAsync(req.body)

      await ClientModel.create(client);
      
      res.json(client)
    }
  }
]