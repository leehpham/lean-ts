import { InMemTable } from "./table";

export interface InMemDbOps {
  createTable: <T>(name: string) => InMemTable<T>;
  getTable: <T>(tableName: string) => InMemTable<T> | undefined;
}
