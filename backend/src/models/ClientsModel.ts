import { DateType, Model } from './Model';

export enum Role {
  Admin = 'admin',
  User = 'user',
}

export type Client = {
  id: number;
  email: string;
  name: string;
  phone: string;
};

export class ClientModel extends Model {
  static tableName = 'clients';

  public static async create<Payload>(data: Payload): Promise<Client & DateType> {
    return super.insert<Payload, Client>({
      ...data,
    });
  }

  public static find(): Promise<Client[]> {
    return this.all<Client>()
  }
}