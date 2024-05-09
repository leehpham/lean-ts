export interface RepoUpdate<T> {
  update: (input: T) => Promise<T>;
}
