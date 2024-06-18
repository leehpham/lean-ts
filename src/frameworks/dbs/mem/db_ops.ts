import { MemEntity } from "../../../entities/impls/mem/mem.entity";
import { MemTable } from "./table";

export interface InMemDbOps {
  createTable: <T extends MemEntity>(name: string) => MemTable<T>;
  getTable: <T extends MemEntity>(tableName: string) => MemTable<T> | undefined;
  // eslint-disable-next-line
  getAllTables: () => Map<string, MemTable<any>>;
  reset: () => void;
}
