import { TodoItem } from "../../entities/todo_item.entity";
import { UseCase } from "../abstractions/usecase";
import { CreateTodoItemInputDto } from "./create_todo_item_input.dto";
import { CreateTodoItemOutputDto } from "./create_todo_item_output.dto";

export class CreateTodoItemUseCase
  implements UseCase<CreateTodoItemInputDto, CreateTodoItemOutputDto>
{
  public execute(input: CreateTodoItemInputDto): CreateTodoItemOutputDto {
    const todoItems: TodoItem[] = [];
    const itemToCreate: TodoItem = { ...input, id: todoItems.length + 1 };
    todoItems.push(itemToCreate);
    return itemToCreate;
  }
}
