import { describe, expect, test } from "@jest/globals";

import { CreateTodoItemInputDto } from "../../../../../../../../src/app/dto/todo-item/create/inputDto";
import { CreateTodoItemInputValidator } from "../../../../../../../../src/app/use-cases/impls/todo-item/create/inputVldtr";

describe("CreateTodoItemInputValidator", () => {
  const validator = new CreateTodoItemInputValidator();

  test("empty title, throws error.", async () => {
    const input: CreateTodoItemInputDto = { title: "" };

    await expect(validator.validate(input)).rejects.toThrow(Error);
    await expect(validator.validate(input)).rejects.toThrow(/empty/);
  });

  test("empty description, throws error.", async () => {
    const input: CreateTodoItemInputDto = { description: "", title: "title" };

    await expect(validator.validate(input)).rejects.toThrow(Error);
    await expect(validator.validate(input)).rejects.toThrow(/empty/);
  });
});
