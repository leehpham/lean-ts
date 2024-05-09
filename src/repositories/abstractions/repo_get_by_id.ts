export interface RepoGetById<T> {
  getById: (id: number) => Promise<T | undefined>;
}
