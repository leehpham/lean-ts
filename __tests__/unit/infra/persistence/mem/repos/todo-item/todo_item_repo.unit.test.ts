import { faker } from "@faker-js/faker";

import { TodoItemMemModel } from "../../../../../../../src/infra/persistence/mem/models/todo_item_mem_model";
import { TodoItemMemRepoConsts as Consts } from "../../../../../../../src/infra/persistence/mem/repos/todo-item/consts";
import { TodoItemMemRepo } from "../../../../../../../src/infra/persistence/mem/repos/todo-item/todo_item_repo";

function makeRepo(): TodoItemMemRepo {
  return new TodoItemMemRepo();
}

function makeCreateInput(): Omit<TodoItemMemModel, "id"> {
  return {
    description: faker.string.alpha({ length: { max: 200, min: 5 } }),
    title: faker.string.alpha({ length: { max: 10, min: 5 } }),
  };
}

describe("TodoItemMemRepoImpl", () => {
  describe("create", () => {
    test("create a record, passed", () => {
      const repo = makeRepo();
      const input = makeCreateInput();

      const created = repo.create(input);

      expect(created.id).toBeGreaterThan(0);
      expect(created).toEqual({ id: created.id, ...input });

      repo.delete(created.id);
    });
  });

  describe("getById", () => {
    test("get an existing record by id, passed", () => {
      const repo = makeRepo();
      const createInput = makeCreateInput();
      const created = repo.create(createInput);

      const got = repo.getById(created.id);

      expect(got).toEqual(created);

      repo.delete(created.id);
    });

    test("input random id, record is not found, throws error", () => {
      const repo = makeRepo();
      const randomId = faker.number.int();

      expect(() => repo.getById(randomId)).toThrow(Error);
      expect(() => repo.getById(randomId)).toThrow(
        Consts.ERR_GENS.getById.notFound(randomId)
      );
    });
  });

  describe("getAll", () => {
    test("called on clean table, returns empty array", () => {
      const repo = makeRepo();

      const output = repo.getAll();

      expect(output).toEqual([]);
    });

    test("called with pre-created data, returns those data", () => {
      const repo = makeRepo();
      const created: TodoItemMemModel[] = [];
      for (let i = 0; i < 100; i++) {
        created.push(repo.create(makeCreateInput()));
      }

      const output = repo.getAll();

      expect(output.sort()).toEqual(created.sort());

      repo.deleteAll();
    });
  });

  describe("update", () => {
    test("input random id, throws error", () => {
      const repo = makeRepo();
      const randomId = faker.number.int();
      const updateInput: Partial<Omit<TodoItemMemModel, "id">> = {};

      expect(() => repo.update(randomId, updateInput)).toThrow(Error);
      expect(() => repo.update(randomId, updateInput)).toThrow(
        Consts.ERR_GENS.getById.notFound(randomId)
      );
    });

    test("update an existing record, passed", () => {
      const repo = makeRepo();
      const created = repo.create(makeCreateInput());
      const updateInput: Partial<Omit<TodoItemMemModel, "id">> = {
        description: faker.string.alpha({ length: { max: 200, min: 5 } }),
        title: faker.string.alpha({ length: { max: 10, min: 5 } }),
      };

      const output = repo.update(created.id, updateInput);
      expect(output).toEqual({ id: created.id, ...updateInput });
    });
  });

  describe("delete", () => {
    test("delete an existing record, passed", () => {
      const repo = makeRepo();
      const input = makeCreateInput();
      const created = repo.create(input);

      repo.delete(created.id);

      expect(() => repo.getById(created.id)).toThrow(Error);
      expect(() => repo.getById(created.id)).toThrow(
        Consts.ERR_GENS.getById.notFound(created.id)
      );
    });

    test("input random id, throws error", () => {
      const repo = makeRepo();
      const randomId = faker.number.int();

      expect(() => repo.delete(randomId)).toThrow(Error);
      expect(() => repo.delete(randomId)).toThrow(
        Consts.ERR_GENS.delete.failed(randomId)
      );
    });
  });

  describe("deleteAll", () => {
    test("delete all records, passed", () => {
      const repo = makeRepo();

      for (let i = 0; i < 100; i++) {
        repo.create(makeCreateInput());
      }

      repo.deleteAll();

      expect(repo.getAll()).toEqual([]);
    });
  });
});
