import { CreateTodoItemInputValidator } from "../../../../../../src/use-cases/todo-item/create/validators/create_todo_item_input_validator";

describe("CreateTodoItemInputValidator", () => {
  test("empty title, throws error.", async () => {
    const validator = new CreateTodoItemInputValidator();

    try {
      await validator.validate({ title: "", description: null });
    } catch (error) {
      expect((error as Error).message).toContain("Title should not be empty");
    }
  });
});
