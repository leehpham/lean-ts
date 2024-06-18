import { TodoItemMem } from "../../../../../entities/impls/mem/todo_item_mem.entity";
import { CreateMemRepo } from "../../../../../repos/impls/mem/abstrs/create/create_mem_repo";
import { InputVldtr } from "../../../../../use-cases/abstrs/input_vldtr";
import { CreateTodoItemInputDto } from "../../../../../use-cases/impls/todo-item/create/dtos/input.dto";
import { CreateTodoItemUseCase } from "../../../../../use-cases/impls/todo-item/create/usecase";

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    const id = 1;

    const fakeCreateInMemRepo: CreateMemRepo<TodoItemMem> = {
      create: jest.fn(
        (input: TodoItemMem): Promise<TodoItemMem & { id: number }> => {
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
    const fakeInputVldtr: InputVldtr<CreateTodoItemInputDto> = {
      validate: jest.fn(),
    };

    const useCase = new CreateTodoItemUseCase(
      fakeInputVldtr,
      fakeCreateInMemRepo
    );

    await expect(useCase.execute(input)).resolves.toEqual({ ...input, id });
  });
});