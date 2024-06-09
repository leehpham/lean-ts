export class InMemTableConsts {
  public static readonly NAME = {
    maxLength: 63,
    errs: {
      empty: "Table name should not be empty",
    },
    errGens: {
      lengthExceeded: (): string =>
        `Table name should not be longer than ${InMemTableConsts.NAME.maxLength}.`,
    },
  };

  public static readonly ERRS = {
    insert: {
      notExist: "Data does not exist.",
    },
  };
}
