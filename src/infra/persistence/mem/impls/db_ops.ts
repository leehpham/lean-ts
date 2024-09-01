import { MemModel } from "../models/mem_model";
import { MemTable } from "./table";

export interface InMemDbOps {
  createTable: <T extends MemModel>(name: string) => MemTable<T>;
  getTable: <T extends MemModel>(tableName: string) => MemTable<T> | undefined;
  // eslint-disable-next-line
  getAllTables: () => Map<string, MemTable<any>>;
  reset: () => void;
}
