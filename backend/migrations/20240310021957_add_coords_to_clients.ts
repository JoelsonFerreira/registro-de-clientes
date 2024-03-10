import type { Knex } from "knex";

const tableName = 'clients';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.table(tableName, table => {
    table.string('coordX', 128);
    table.string('coordY', 128);
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table(tableName, table => {
    table.dropColumn('coordX');
    table.dropColumn('coordY');
  })
}

