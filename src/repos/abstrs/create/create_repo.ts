export interface CreateRepo<T> {
  create: (input: T) => Promise<T & { id: number }>;
}
