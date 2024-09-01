import { faker } from "@faker-js/faker";

import { MemDb } from "../../../../../../src/infra/persistence/mem/impls/db";
import { InMemTableConsts } from "../../../../../../src/infra/persistence/mem/impls/table_consts";
import { MemModel } from "../../../../../../src/infra/persistence/mem/models/mem_model";

type Foo = MemModel & {
  foo: string;
  bar: number;
  baz: boolean;
};

function getDb(): MemDb {
  return MemDb.instance;
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
      db.reset();
    });

    test("empty string as input name, throws error", () => {
      const db = getDb();

      expect(() => db.createTable<Foo>("")).toThrow(Error);
      expect(() => db.createTable<Foo>("")).toThrow(/empty/);

      db.reset();
    });

    test("a table with the same name already exists, throws error", () => {
      const db = getDb();
      const name = faker.string.alpha();
      db.createTable<Foo>(name);

      expect(() => db.createTable<Foo>(name)).toThrow(Error);
      expect(() => db.createTable<Foo>(name)).toThrow(/exists/);

      db.reset();
    });
  });

  describe("getTable", () => {
    test("get a non existing table, returns undefined", () => {
      const db = getDb();
      const name = faker.string.alpha();

      const output = db.getTable<Foo>(name);
      expect(output).toBeUndefined();

      db.reset();
    });

    test("get an existing table, returns that table", () => {
      const db = getDb();
      const tableName = faker.string.alpha();
      const createdTable = db.createTable<Foo>(tableName);

      const retrievedTable = db.getTable<Foo>(tableName);

      expect(createdTable).toBe(retrievedTable);

      db.reset();
    });
  });

  describe("getAllTables", () => {
    test("clean db state, returns 0", () => {
      const db = getDb();

      expect(db.getAllTables().size).toBe(0);

      db.reset();
    });

    test("returns all created tables, passed", () => {
      const db = getDb();

      const table1Name = faker.string.alpha(InMemTableConsts.NAME.maxLength);
      db.createTable<Foo>(table1Name);
      const table2Name = faker.string.alpha(InMemTableConsts.NAME.maxLength);
      db.createTable<Foo>(table2Name);
      const table3Name = faker.string.alpha(InMemTableConsts.NAME.maxLength);
      db.createTable<Foo>(table3Name);

      const allTables = db.getAllTables();

      expect(Array.from(allTables.keys()).sort()).toEqual(
        [table1Name, table2Name, table3Name].sort()
      );

      db.reset();
    });
  });

  describe("reset", () => {
    test("reset call removes all tables, passed", () => {
      const db = getDb();
      const table1Name = faker.string.alpha(InMemTableConsts.NAME.maxLength);
      db.createTable<Foo>(table1Name);
      const table2Name = faker.string.alpha(InMemTableConsts.NAME.maxLength);
      db.createTable<Foo>(table2Name);
      const table3Name = faker.string.alpha(InMemTableConsts.NAME.maxLength);
      db.createTable<Foo>(table3Name);

      db.reset();

      const allTables = db.getAllTables();
      expect(allTables.size).toBe(0);
    });
  });
});
