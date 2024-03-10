import 'dotenv/config'

import { z } from 'zod'
import dotenv from 'dotenv'; 

dotenv.config({ path: ".env.local" })

const envSchema = z.object({
  PORT: z.string().regex(/^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/),
  PG_CONNECTION_STRING: z.string().regex(/(postgres(?:ql)?):\/\/(?:([^@\s]+)@)?([^\/\s]+)(?:\/(\w+))?(?:\?(.+))?/)
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('Invalid Env', _env.error.format())
  throw new Error('Invalid Env Error')
}

export const env = _env.data