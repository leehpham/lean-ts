export interface MemTableOps<T> {
  insert: (data: T) => string | undefined;
  get: (key: string) => T | undefined;
  getAll: () => T[];
  update: (key: string, data: Partial<T>) => boolean;
  delete: (key: string) => boolean;
}
