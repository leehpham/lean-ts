// import { TodoItemInMem } from "../../../entities/implementations/in-mem/todo_item_in_mem.entity";
// import { Repository } from "../../../repositories/abstractions/repository";
// import { UseCase } from "../../abstractions/usecase";
// import { Validator } from "../../abstractions/validator";
// import { CreateTodoItemUseCase } from "./create_todo_item.usecase";
// import { CreateTodoItemInputDto } from "./dtos/create_todo_item_input.dto";
// import { CreateTodoItemOutputDto } from "./dtos/create_todo_item_output.dto";

describe("CreateTodoItemUsecase", () => {
  test("valid input, new TodoItem is created", async () => {
    // class FakeInputValidator implements Validator<CreateTodoItemInputDto> {
    //   public async validate(input: CreateTodoItemInputDto): Promise<void> {
    //     input;
    //   }
    // }
    //
    // class FakeRepo implements Repository<TodoItemInMem> {
    //   public async create(
    //     input: Omit<TodoItemInMem, "id">
    //   ): Promise<TodoItemInMem> {
    //     input;
    //     return { id: 1, title: "test title", description: null };
    //   }
    // }
    // const useCase: UseCase<CreateTodoItemInputDto, CreateTodoItemOutputDto> =
    //   new CreateTodoItemUseCase(new FakeInputValidator(), new FakeRepo());
  });
});
