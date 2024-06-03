export interface InMemTableOps<T> {
  insert: (data: T) => string;
  get: (key: string) => T | undefined;
  update: (key: string, data: Partial<T>) => boolean;
  delete: (key: string) => boolean;
}
