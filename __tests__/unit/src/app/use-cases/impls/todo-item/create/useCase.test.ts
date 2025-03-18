import { describe, expect, jest, test } from "@jest/globals";

import { CreateTodoItemInputDto } from "../../../../../../../../src/app/dto/todo-item/create/inputDto";
import { IInputVldtr } from "../../../../../../../../src/app/use-cases/abstrs/iInputVldtr";
import { CreateTodoItemUseCase } from "../../../../../../../../src/app/use-cases/impls/todo-item/create/useCase";
import { ICreateMemRepo } from "../../../../../../../../src/core/repos/mem/common/iCreateMemRepo";
import { TodoItemMemModel } from "../../../../../../../../src/infra/persistence/mem/models/todoItemMemModel";

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
