import { CreateTodoItemInputDto } from "../../../../../../../src/app/dto/todo-item/create/input_dto";
import { IInputVldtr } from "../../../../../../../src/app/use-cases/abstrs/i_input_vldtr";
import { CreateTodoItemUseCase } from "../../../../../../../src/app/use-cases/impls/todo-item/create/usecase";
import { ICreateMemRepo } from "../../../../../../../src/core/repos/mem/common/i_create_mem_repo";
import { TodoItemMem } from "../../../../../../../src/infra/persistence/mem/models/i_todo_item_entity";

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    const id = 1;

    const fakeCreateInMemRepo: ICreateMemRepo<TodoItemMem> = {
      create: jest.fn((input: Omit<TodoItemMem, "id">): TodoItemMem => {
        return { id, ...input };
      }),
    };
    const input: CreateTodoItemInputDto = {
      description: "description",
      title: "title",
    };
    const fakeInputVldtr: IInputVldtr<CreateTodoItemInputDto> = {
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
