export interface RepoGetAll<T> {
  getAll: () => Promise<T[]>;
}
