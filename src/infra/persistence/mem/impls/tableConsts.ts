export class InMemTableConsts {
  public static readonly NAME = {
    errGens: {
      lengthExceeded: (): string =>
        `Table name should not be longer than ${InMemTableConsts.NAME.maxLength}.`,
    },
    errs: {
      empty: "Table name should not be empty",
    },
    maxLength: 63,
  };

  public static readonly ERRS = {
    insert: {
      notExist: "Data does not exist.",
    },
  };
}
