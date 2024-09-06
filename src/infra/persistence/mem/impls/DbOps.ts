import { MemModel } from "../models/MemModel";
import { MemTable } from "./Table";

export interface InMemDbOps {
  createTable: <T extends MemModel>(name: string) => MemTable<T>;
  getTable: <T extends MemModel>(tableName: string) => MemTable<T> | undefined;
  // eslint-disable-next-line
  getAllTables: () => Map<string, MemTable<any>>;
  reset: () => void;
}
