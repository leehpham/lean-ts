export interface CreateRepo<T> {
  create: (input: Omit<T, "id">) => Promise<T>;
}
