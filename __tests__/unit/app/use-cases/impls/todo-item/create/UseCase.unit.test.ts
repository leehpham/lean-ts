import { describe, expect, jest, test } from "@jest/globals";

import { CreateTodoItemInputDto } from "../../../../../../../src/app/dto/todo-item/create/InputDto";
import { IInputVldtr } from "../../../../../../../src/app/use-cases/abstrs/IInputVldtr";
import { CreateTodoItemUseCase } from "../../../../../../../src/app/use-cases/impls/todo-item/create/UseCase";
import { ICreateMemRepo } from "../../../../../../../src/core/repos/mem/common/ICreateMemRepo";
import { TodoItemMemModel } from "../../../../../../../src/infra/persistence/mem/models/TodoItemMemModel";

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    const id = 1;

    const fakeCreateInMemRepo: ICreateMemRepo<TodoItemMemModel> = {
      create: jest.fn(
        (input: Omit<TodoItemMemModel, "id">): TodoItemMemModel => {
          return { id, ...input };
        }
      ),
    };
    const input: CreateTodoItemInputDto = {
      description: "description",
      title: "title",
    };
    const fakeInputVldtr: IInputVldtr<CreateTodoItemInputDto> = {
      validate: jest.fn<(input: CreateTodoItemInputDto) => Promise<void>>(),
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
