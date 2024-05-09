export interface RepoCreate<T> {
  create: (input: Omit<T, "id">) => Promise<T>;
}
