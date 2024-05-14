export interface DeleteRepo {
  delete: (id: number) => Promise<void>;
}
