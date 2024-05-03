export interface Repository<T> {
  create: (input: Omit<T, "id">) => Promise<T>;
}
