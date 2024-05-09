export interface RepoDelete {
  delete: (id: number) => Promise<void>;
}
