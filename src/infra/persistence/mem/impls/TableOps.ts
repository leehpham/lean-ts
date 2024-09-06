import { MemModel } from "../models/MemModel";

export interface MemTableOps<T extends MemModel> {
  insert: (data: Omit<T, "id">) => T;
  get: (key: string) => T | undefined;
  getAll: () => T[];
  update: (key: string, data: Partial<Omit<T, "id">>) => T;
  delete: (key: string) => boolean;
  deleteAll: () => void;
}
