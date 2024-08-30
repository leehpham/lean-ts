import { TodoItemMem } from "../../../../../src/infra/persistence/mem/models/todo_item.entity";
import { CreateMemRepo } from "../../../../../src/core/repos/mem/common/create_mem_repo";
import { InputVldtr } from "../../../../../src/app/use-cases/abstrs/input_vldtr";
import { CreateTodoItemInputDto } from "../../../../../src/app/dto/todo-item/create/input.dto";
import { CreateTodoItemUseCase } from "../../../../../src/app/use-cases/impls/todo-item/create/usecase";

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    const id = 1;

    const fakeCreateInMemRepo: CreateMemRepo<TodoItemMem> = {
      create: jest.fn((input: Omit<TodoItemMem, "id">): TodoItemMem => {
        return { id, ...input };
      }),
    };
    const input: CreateTodoItemInputDto = {
      description: "description",
      title: "title",
    };
    const fakeInputVldtr: InputVldtr<CreateTodoItemInputDto> = {
      validate: jest.fn(),
    };

    const useCase = new CreateTodoItemUseCase(
      fakeInputVldtr,
      fakeCreateInMemRepo
    );

    await expect(useCase.execute(input)).resolves.toEqual({
      created: { ...input, id },
    });
  });
});
