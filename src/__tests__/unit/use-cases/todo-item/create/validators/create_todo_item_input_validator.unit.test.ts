import { CreateTodoItemInputDto } from "../../../../../../use-cases/todo-item/create/dtos/create_todo_item_input.dto";
import { CreateTodoItemInputValidator } from "../../../../../../use-cases/todo-item/create/validators/create_todo_item_input_validator";

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
