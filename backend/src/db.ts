import postgres from 'postgres'

import { env } from "./env"

export const sql = postgres(env.PG_CONNECTION_STRING)
