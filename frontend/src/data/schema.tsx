import { z } from "zod"

export const clientSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
})

export type Client = z.infer<typeof clientSchema>