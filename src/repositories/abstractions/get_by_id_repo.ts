export interface GetByIdRepo<T> {
  getById: (id: number) => Promise<T | undefined>;
}
