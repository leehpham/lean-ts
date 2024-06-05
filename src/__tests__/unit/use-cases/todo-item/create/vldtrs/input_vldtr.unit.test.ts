import { CreateTodoItemInputDto } from "../../../../../../use-cases/impls/todo-item/create/dtos/input.dto";
import { CreateTodoItemInputValidator } from "../../../../../../use-cases/impls/todo-item/create/vldtrs/input_vldtr";

describe("CreateTodoItemInputValidator", () => {
  const validator = new CreateTodoItemInputValidator();

  test("empty title, throws error.", async () => {
    const input: CreateTodoItemInputDto = { title: "" };

    await expect(validator.validate(input)).rejects.toThrow(Error);
    await expect(validator.validate(input)).rejects.toThrow(/empty/);
  });

  test("empty description, throws error.", async () => {
    const input: CreateTodoItemInputDto = { title: "title", description: "" };

    await expect(validator.validate(input)).rejects.toThrow(Error);
    await expect(validator.validate(input)).rejects.toThrow(/empty/);
  });
});