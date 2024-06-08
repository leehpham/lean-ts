import { faker } from "@faker-js/faker";

import { InMemTableConsts } from "../../../../dbs/impls/mem/constants/table_consts";
import { MemTable } from "../../../../dbs/impls/mem/table";

interface Foo {
  bar: number;
  baz: string;
}

function makeTable<T>(name: string): MemTable<T> {
  return new MemTable<T>(name);
}

function makeFoo(): Foo {
  return {
    bar: faker.number.int(),
    baz: faker.string.alpha(),
  };
}

describe("constructor", () => {
  test("input name is an empty string, throws error.", () => {
    expect(() => {
      makeTable<Foo>("");
    }).toThrow(Error);
    expect(() => {
      makeTable<Foo>("");
    }).toThrow(/empty/);
  });

  test(`input name is more than ${InMemTableConsts.NAME.maxLength} chars, throw errors.`, () => {
    const input = faker.string.alpha(InMemTableConsts.NAME.maxLength + 1);

    expect(() => {
      makeTable<Foo>(input);
    }).toThrow(Error);
    expect(() => {
      makeTable<Foo>(input);
    }).toThrow(/not be longer/);
  });

  test("input name with empty spaces is trimmed, passed", () => {
    const name = faker.string.alpha({
      length: { min: 1, max: InMemTableConsts.NAME.maxLength },
    });
    const input = `   ${name}  `;

    const trimSpy = jest.spyOn(String.prototype, "trim");
    makeTable<Foo>(input);

    expect(trimSpy).toHaveBeenCalled();
    expect(trimSpy).toHaveReturnedWith(name);

    trimSpy.mockRestore();
  });
});

describe("insert", () => {
  test("new table, insert data, returns key", () => {
    const table = makeTable<Foo>("foo");
    const data = makeFoo();

    const insertedKey = table.insert(data);

    expect(insertedKey).toBe("1");
  });
});

describe("get", () => {
  test("input key with empty spaces is trimmed, passed", () => {
    const table = makeTable<Foo>("foo");
    const fakeKey = faker.number.int();
    const input = `   ${fakeKey}   `;

    const trimSpy = jest.spyOn(String.prototype, "trim");
    table.get(input);

    expect(trimSpy).toHaveBeenCalled();
    expect(trimSpy).toHaveReturnedWith(fakeKey.toString());

    trimSpy.mockRestore();
  });

  test("get data by key, returns data", () => {
    const table = makeTable<Foo>("foo");
    const data = makeFoo();
    const insertedKey = table.insert(data);

    const output = table.get(insertedKey);

    expect(output).toEqual(data);
  });
});

describe("getAll", () => {
  test("no data is inserted, returns empty array", () => {
    const table = makeTable<Foo>("foo");

    const allData = table.getAll();

    expect(allData).toBeInstanceOf(Array);
    expect(allData).toEqual([]);
  });

  test("get all data, passed", () => {
    const table = makeTable<Foo>("foo");
    const data01 = makeFoo();
    const data02 = makeFoo();
    const data03 = makeFoo();
    table.insert(data01);
    table.insert(data02);
    table.insert(data03);

    const allData = table.getAll();
    expect(allData).toEqual([data01, data02, data03]);
  });
});

describe("update", () => {
  test("input key with empty spaces is trimmed, passed", () => {
    const table = makeTable<Foo>("foo");
    const fakeKey = faker.number.int();
    const inputKey = `   ${fakeKey}   `;
    const data: Partial<Foo> = {
      bar: faker.number.int(),
    };

    const trimSpy = jest.spyOn(String.prototype, "trim");
    table.update(inputKey, data);

    expect(trimSpy).toHaveBeenCalled();
    expect(trimSpy).toHaveReturnedWith(fakeKey.toString());

    trimSpy.mockRestore();
  });

  test("data doesn't exist, returns false", () => {
    const table = makeTable<Foo>("foo");
    const inputKey = faker.string.numeric();
    const inputData: Partial<Foo> = {
      bar: faker.number.int(),
    };

    const output = table.update(inputKey, inputData);

    expect(output).toBe(false);
  });

  test("data exists, updates data and returns true", () => {
    const table = makeTable<Foo>("foo");
    const dataToInsert = makeFoo();
    const insertedKey = table.insert(dataToInsert);
    const updateInput: Partial<Foo> = {
      bar: faker.number.int(),
      baz: faker.string.alphanumeric(),
    };

    const output = table.update(insertedKey, updateInput);
    const updatedData = table.get(insertedKey);

    expect(output).toBe(true);
    expect(updatedData).toEqual({ ...dataToInsert, ...updateInput });
  });
});

describe("delete", () => {
  test("input key with white spaces is trimmed, passed", () => {
    const table = makeTable<Foo>("foo");
    const inputKey = faker.string.numeric();
    const input = `   ${inputKey}   `;

    const trimSpy = jest.spyOn(String.prototype, "trim");
    table.delete(input);

    expect(trimSpy).toHaveBeenCalledTimes(1);
    expect(trimSpy).toHaveReturnedWith(inputKey);

    trimSpy.mockRestore();
  });

  test("delete non-existing item, returns false", () => {
    const table = makeTable<Foo>("foo");
    const input = faker.string.numeric();

    const output = table.delete(input);

    expect(output).toBe(false);
  });

  test("delete existing item, returns true", () => {
    const table = makeTable<Foo>("foo");
    const data = makeFoo();
    const key = table.insert(data);

    const output = table.delete(key);
    const deleted = table.get(key);

    expect(output).toBe(true);
    expect(deleted).toBeUndefined();
  });
});
