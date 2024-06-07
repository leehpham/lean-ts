import { faker } from "@faker-js/faker";

import { InMemDb } from "../../../../dbs/impls/in-mem/db";

type Foo = {
  foo: string;
  bar: number;
  baz: boolean;
};

function getDb(): InMemDb {
  return InMemDb.instance;
}

describe("InMemDb", () => {
  describe("createTable", () => {
    test("input name with whitespaces is trimmed, passed", () => {
      const db = getDb();
      const inputName = faker.string.alpha();

      const trimSpy = jest.spyOn(String.prototype, "trim");
      db.createTable<Foo>(`   ${inputName}    `);

      expect(trimSpy).toHaveBeenCalled();
      expect(trimSpy).toHaveReturnedWith(inputName);

      trimSpy.mockRestore();
    });

    test("empty string as input name, throws error", () => {
      const db = getDb();

      expect(() => db.createTable<Foo>("")).toThrow(Error);
      expect(() => db.createTable<Foo>("")).toThrow(/empty/);
    });

    test("a table with the same name already exists, throws error", () => {
      const db = getDb();
      const name = faker.string.alpha();
      db.createTable<Foo>(name);

      expect(() => db.createTable<Foo>(name)).toThrow(Error);
      expect(() => db.createTable<Foo>(name)).toThrow(/exists/);
    });
  });

  describe("getTable", () => {
    test("get a non existing table, returns undefined", () => {
      const db = getDb();
      const name = faker.string.alpha();

      const output = db.getTable<Foo>(name);
      expect(output).toBeUndefined();
    });

    test("get an existing table, returns that table", () => {
      const db = getDb();
      const tableName = faker.string.alpha();
      const createdTable = db.createTable<Foo>(tableName);

      const retrievedTable = db.getTable<Foo>(tableName);

      expect(createdTable).toBe(retrievedTable);
    });
  });
});
