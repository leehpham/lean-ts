import "reflect-metadata";

import { UseCase } from "./use-cases/abstrs/usecase";
import { CreateTodoItemUseCase } from "./use-cases/impls/todo-item/create/usecase";
import { CreateTodoItemInputDto } from "./use-cases/impls/todo-item/create/dtos/input.dto";
import { CreateTodoItemOutputDto } from "./use-cases/impls/todo-item/create/dtos/output.dto";

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
