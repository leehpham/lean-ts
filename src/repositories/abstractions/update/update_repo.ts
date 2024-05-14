export interface UpdateRepo<T> {
  update: (input: T) => Promise<T>;
}
