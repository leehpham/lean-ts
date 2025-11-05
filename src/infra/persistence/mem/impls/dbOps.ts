import { MemModel } from "../models/memModel.js";
import { MemTable } from "./table.js";

export interface InMemDbOps {
  createTable: <T extends MemModel>(name: string) => MemTable<T>;
  getTable: <T extends MemModel>(tableName: string) => MemTable<T> | undefined;
  // eslint-disable-next-line
  getAllTables: () => Map<string, MemTable<any>>;
  reset: () => void;
}
