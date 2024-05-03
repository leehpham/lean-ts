import "reflect-metadata";

import { UseCase } from "./use-cases/abstractions/usecase";
import { CreateTodoItemUseCase } from "./use-cases/todo-item/create/create_todo_item.usecase";
import { CreateTodoItemInputDto } from "./use-cases/todo-item/create/dtos/create_todo_item_input.dto";
import { CreateTodoItemOutputDto } from "./use-cases/todo-item/create/dtos/create_todo_item_output.dto";

main().then();

async function main(): Promise<void> {
  const useCase: UseCase<CreateTodoItemInputDto, CreateTodoItemOutputDto> =
    new CreateTodoItemUseCase();
  const createdItem = await useCase.execute({
    title: "test title",
    description: "test description ",
  });
  console.log(createdItem);
}
