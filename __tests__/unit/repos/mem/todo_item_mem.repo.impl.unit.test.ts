import { faker } from "@faker-js/faker";

import { TodoItemMem } from "../../../../src/entities/impls/mem/todo_item_mem.entity";
import { TodoItemMemRepoConsts as Consts } from "../../../../src/repos/mem/todo-item/consts";
import { TodoItemMemRepoImpl } from "../../../../src/repos/mem/todo-item/todo_item_mem.repo.impl";

function makeRepo(): TodoItemMemRepoImpl {
  return new TodoItemMemRepoImpl();
}

function makeCreateInput(): Omit<TodoItemMem, "id"> {
  return {
    title: faker.string.alpha({ length: { min: 5, max: 10 } }),
    description: faker.string.alpha({ length: { min: 5, max: 200 } }),
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
  });
});
