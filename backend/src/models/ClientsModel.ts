import { sql } from '../db';

export type Client = {
  id: number;
  email: string;
  name: string;
  phone: string;
  coordX: string;
  coordY: string;
};

export class ClientModel {
  public static create(data: Omit<Client, "id">) {
    return sql`insert into "clients" ("coordX", "coordY", "email", "name", "phone") values (${data.coordX}, ${data.coordY}, ${data.email}, ${data.name}, ${data.phone}) returning *`
  }

  public static find() {
    return sql`select * from "clients"`;
  }

  public static delete(id: string) {
    return sql`delete from "clients" where "id" = ${id}`
  }
}