import z from 'zod';
import dotenv from 'dotenv'; 

dotenv.config({ path: ".env.local" })

const envSchema = z.object({
  PORT: z.string().regex(/^((6553[0-5])|(655[0-2][0-9])|(65[0-4][0-9]{2})|(6[0-4][0-9]{3})|([1-5][0-9]{4})|([0-5]{0,5})|([0-9]{1,4}))$/),
});

export const env = envSchema.parse(process.env);