export class TodoItemMemRepoConsts {
  public static readonly ERR_GENS = {
    create: {
      insertedNotFound: (key: string, tableName: string): string =>
        `Cannot find inserted data with key - ${key} in table ${tableName}`,
    },
  };
}
