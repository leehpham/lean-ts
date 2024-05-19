import { TodoItemInMem } from "../../../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { CreateInMemRepo } from "../../../../../repositories/implementations/in-mem/abstractions/create/create_in_mem_repo";
import { CreateTodoItemUseCase } from "../../../../../use-cases/implementations/todo-item/create/create_todo_item.usecase";
import { CreateTodoItemInputDto } from "../../../../../use-cases/implementations/todo-item/create/dtos/create_todo_item_input.dto";

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    const id = 1;
    const fakeCreateInMemRepo: CreateInMemRepo<TodoItemInMem> = {
      create: jest.fn(
        (input: Omit<TodoItemInMem, "id">): Promise<TodoItemInMem> => {
          return new Promise((resolve) => {
            resolve({
              ...input,
              id,
            });
          });
        }
      ),
    };
    const input: CreateTodoItemInputDto = {
      title: "title",
      description: "description",
    };

    const useCase = new CreateTodoItemUseCase(undefined, fakeCreateInMemRepo);

    await expect(useCase.execute(input)).resolves.toEqual({ ...input, id });
  });
});
