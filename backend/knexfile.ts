import type { Knex } from "knex";

import { env } from "./src/env";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
  },

  staging: {
    client: 'pg',
    connection: env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
  },

  production: {
    client: 'pg',
    connection: env.PG_CONNECTION_STRING,
    searchPath: ['knex', 'public'],
  }

};

module.exports = config;
