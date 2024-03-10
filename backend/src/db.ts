import knex from "knex"

import { env } from "./env"

export const db = knex({
  client: 'pg',
  connection: env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
})
