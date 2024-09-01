import { faker } from "@faker-js/faker";

import { MemTable } from "../../../../../../src/infra/persistence/mem/impls/table";
import { InMemTableConsts } from "../../../../../../src/infra/persistence/mem/impls/table_consts";
import { MemModel } from "../../../../../../src/infra/persistence/mem/models/mem_model";

interface Foo extends MemModel {
  bar: number;
  baz: string;
}

function makeTable<T extends MemModel>(name: string): MemTable<T> {
  return new MemTable<T>(name);
}

function makeFooWithoutId(): Omit<Foo, "id"> {
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
      length: { max: InMemTableConsts.NAME.maxLength, min: 1 },
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
  test("new table, insert data, returns inserted data", () => {
    const table = makeTable<Foo>("foo");
    const data = makeFooWithoutId();

    const inserted = table.insert(data);

    expect(inserted).toEqual({ id: inserted.id, ...data });
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
    const data = makeFooWithoutId();
    const inserted = table.insert(data);

    const output = table.get(inserted.id.toString());

    expect(output).toEqual({ id: inserted.id, ...data });
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
    const data01 = makeFooWithoutId();
    const data02 = makeFooWithoutId();
    const data03 = makeFooWithoutId();
    const inserted01 = table.insert(data01);
    const inserted02 = table.insert(data02);
    const inserted03 = table.insert(data03);

    const allData = table.getAll();

    expect(allData).toEqual([
      { id: inserted01.id, ...data01 },
      { id: inserted02.id, ...data02 },
      { id: inserted03.id, ...data03 },
    ]);
  });
});

describe("update", () => {
  test("input key with empty spaces is trimmed, passed", () => {
    const table = makeTable<Foo>("foo");
    const toInsert = makeFooWithoutId();
    const inserted = table.insert(toInsert);
    const inputKey = `   ${inserted.id}   `;
    const data: Partial<Omit<Foo, "id">> = {
      bar: faker.number.int(),
    };

    const trimSpy = jest.spyOn(String.prototype, "trim");
    table.update(inputKey, data);

    expect(trimSpy).toHaveBeenCalled();
    expect(trimSpy).toHaveReturnedWith(inserted.id.toString());

    trimSpy.mockRestore();
  });

  test("data doesn't exist, returns false", () => {
    const table = makeTable<Foo>("foo");
    const inputKey = faker.string.numeric();
    const inputData: Partial<Omit<Foo, "id">> = {
      bar: faker.number.int(),
    };

    expect(() => table.update(inputKey, inputData)).toThrow(Error);
    expect(() => table.update(inputKey, inputData)).toThrow(/exist/);
  });

  test("data exists, updates data and returns updated data.", () => {
    const table = makeTable<Foo>("foo");
    const dataToInsert = makeFooWithoutId();
    const inserted = table.insert(dataToInsert);
    const updateInput: Partial<Omit<Foo, "id">> = {
      bar: faker.number.int(),
      baz: faker.string.alphanumeric(),
    };

    const updatedData = table.update(inserted.id.toString(), updateInput);

    expect(updatedData).toEqual({ ...inserted, ...updateInput });
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
    const data = makeFooWithoutId();
    const inserted = table.insert(data);

    const output = table.delete(inserted.id.toString());
    const deleted = table.get(inserted.id.toString());

    expect(output).toBe(true);
    expect(deleted).toBeUndefined();
  });
});

describe("deleteAll", () => {
  test("delete all data, passed", () => {
    const table = makeTable<Foo>("foo");

    for (let i = 0; i < 100; i++) {
      table.insert(makeFooWithoutId());
    }

    table.deleteAll();

    expect(table.getAll()).toEqual([]);
  });
});
