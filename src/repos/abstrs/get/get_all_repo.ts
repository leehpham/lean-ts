export interface GetAllRepo<T> {
  getAll: () => Promise<T[]>;
}
