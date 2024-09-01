import { CreateTodoItemInputDto } from "../../../../../../../src/app/dto/todo-item/create/input_dto";
import { IInputVldtr } from "../../../../../../../src/app/use-cases/abstrs/i_input_vldtr";
import { CreateTodoItemUseCase } from "../../../../../../../src/app/use-cases/impls/todo-item/create/use_case";
import { ICreateMemRepo } from "../../../../../../../src/core/repos/mem/common/i_create_mem_repo";
import { TodoItemMemEntity } from "../../../../../../../src/infra/persistence/mem/models/todo_item_mem_entity";

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    const id = 1;

    const fakeCreateInMemRepo: ICreateMemRepo<TodoItemMemEntity> = {
      create: jest.fn(
        (input: Omit<TodoItemMemEntity, "id">): TodoItemMemEntity => {
          return { id, ...input };
        }
      ),
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
