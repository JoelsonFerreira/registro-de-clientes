import { z } from "zod"

import { Route } from "../routes";

import { Client, ClientModel } from "../models/ClientsModel";
import { shortestPathByCoords } from "../utils/coords-path";

export const clientSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  coordX: z.string(),
  coordY: z.string(),
})

export const clientParamsSchema = z.object({
  id: z.string(),
})

export const clientsRoutes: Route[] = [
  {
    path: "/",
    method: "get",
    controller: async (req, res) => {
      res.json(await ClientModel.find());
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
  },
  {
    path: "/:id",
    method: "delete",
    controller: async (req, res) => {
      const { id } = await clientParamsSchema.parseAsync(req.params)

      return res.json(await ClientModel.delete(id))
    }
  },
  {
    path: "/path",
    method: "get",
    controller: async (req, res) => {
      const clients = await ClientModel.find();

      const initialCoord = { x: 0, y: 0 }; 

      return res.json(
        shortestPathByCoords([
          initialCoord,
          ...clients.map(client => ({ x: Number(client.coordX), y: Number(client.coordY) }))
        ])
          .shortest_path
          .filter(index => index !== 0)
          .map(index => clients[index - 1])
      )
    }
  }
]