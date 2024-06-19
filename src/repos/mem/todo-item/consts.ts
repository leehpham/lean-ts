export class TodoItemMemRepoConsts {
  public static readonly ERR_GENS = {
    delete: {
      failed: (id: number): string =>
        `Failed to delete TodoItem with ID - ${id}`,
    },
    getById: {
      notFound: (id: number): string => `Cannot find TodoItem with ID - ${id}`,
    },
  };
}
