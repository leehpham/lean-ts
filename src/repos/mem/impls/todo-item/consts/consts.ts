export class TodoItemMemRepoConsts {
  public static readonly ERR_GENS = {
    getById: {
      notFound: (id: number): string => `Cannot find TodoItem with ID - ${id}`,
    },
    create: {
      insertedNotFound: (key: string, tableName: string): string =>
        `Cannot find inserted data with key - ${key} in table ${tableName}`,
    },
    update: {
      failed: (id: number): string =>
        `Failed to update TodoItem with ID - ${id}`,
    },
  };
}
