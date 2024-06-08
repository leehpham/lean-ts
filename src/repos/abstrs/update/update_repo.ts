export interface UpdateRepo<T> {
  update: (input: T & { id: number }) => Promise<T>;
}
