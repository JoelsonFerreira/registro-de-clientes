import type { Knex } from "knex";

const tableName = 'clients';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(tableName, function (table) {
    table.increments('id').primary();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('phone').notNullable();
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(tableName);
}

