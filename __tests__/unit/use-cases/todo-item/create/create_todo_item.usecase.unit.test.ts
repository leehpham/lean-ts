// import { TodoItemInMem } from "../../../../../entities/implementations/in-mem/todo_item_in_mem.entity";
// import { Repository } from "../../../../../repositories/abstractions/repository";
// import { UseCase } from "../../../../../use-cases/abstractions/usecase";
// import { Validator } from "../../../../../use-cases/abstractions/validator";
// import { CreateTodoItemUseCase } from "../../../../../use-cases/todo-item/create/create_todo_item.usecase";
// import { CreateTodoItemInputDto } from "../../../../../use-cases/todo-item/create/dtos/create_todo_item_input.dto";
// import { CreateTodoItemOutputDto } from "../../../../../use-cases/todo-item/create/dtos/create_todo_item_output.dto";

// class FakeInputValidator implements Validator<CreateTodoItemInputDto> {
//   public async validate(input: CreateTodoItemInputDto): Promise<void> {
//     input;
//   }
// }

// class FakeRepo implements Repository<TodoItemInMem> {
//   private _fakeCreatedTodoItem: TodoItemInMem;
//
//   public constructor(fakeCreatedTodoItem: TodoItemInMem) {
//     this._fakeCreatedTodoItem = fakeCreatedTodoItem;
//   }
//
//   public async create(
//     input: Omit<TodoItemInMem, "id">
//   ): Promise<TodoItemInMem> {
//     input;
//     return { ...this._fakeCreatedTodoItem };
//   }
// }

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    // const useCase: UseCase<CreateTodoItemInputDto, CreateTodoItemOutputDto> =
    //   new CreateTodoItemUseCase(new FakeInputValidator(), new FakeRepo());
  });
});
