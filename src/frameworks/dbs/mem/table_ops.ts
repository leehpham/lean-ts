import { MemEntity } from "../../../entities/impls/mem/mem.entity";

export interface MemTableOps<T extends MemEntity> {
  insert: (data: Omit<T, "id">) => T;
  get: (key: string) => T | undefined;
  getAll: () => T[];
  update: (key: string, data: Partial<Omit<T, "id">>) => T;
  delete: (key: string) => boolean;
  deleteAll: () => void;
}
