import { MemTable } from "./table";

export interface InMemDbOps {
  createTable: <T>(name: string) => MemTable<T>;
  getTable: <T>(tableName: string) => MemTable<T> | undefined;
}
