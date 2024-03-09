import { z } from "zod"

import { clients } from "../data/clients";
import { Route } from "../routes";

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
      res.json(clients);
    },
  },
  {
    path: "/",
    method: "post",
    controller: async (req, res) => {
      const newClient = await clientSchema.parseAsync(req.body)
  
      const client = { ...newClient, id: `${clients.length + 1}` }
    
      clients.push(client)
      
      res.json(client)
    }
  }
]