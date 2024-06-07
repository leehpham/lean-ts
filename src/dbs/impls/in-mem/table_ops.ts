export interface InMemTableOps<T> {
  insert: (data: T) => string | undefined;
  get: (key: string) => T | undefined;
  update: (key: string, data: Partial<T>) => boolean;
  delete: (key: string) => boolean;
}
