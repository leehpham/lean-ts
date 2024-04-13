import { TodoItem } from "../../../entities/todo_item.entity";
import { UseCase } from "../../abstractions/usecase";
import { UseCaseTemplate } from "../../abstractions/usecase_template";
import { Validator } from "../../abstractions/validator";
import { CreateTodoItemInputDto } from "./dtos/create_todo_item_input.dto";
import { CreateTodoItemOutputDto } from "./dtos/create_todo_item_output.dto";
import { CreateTodoItemInputValidator } from "./validators/create_todo_item_input_validator";

export class CreateTodoItemUseCase
  extends UseCaseTemplate<CreateTodoItemInputDto, CreateTodoItemOutputDto>
  implements UseCase<CreateTodoItemInputDto, CreateTodoItemOutputDto>
{
  protected readonly _inputValidator: Validator<CreateTodoItemInputDto>;

  public constructor(
    inputValidator: Validator<CreateTodoItemInputDto> = new CreateTodoItemInputValidator()
  ) {
    super();
    this._inputValidator = inputValidator;
  }

  protected async handleLogic(
    input: CreateTodoItemInputDto
  ): Promise<CreateTodoItemOutputDto> {
    const todoItems: TodoItem[] = [];
    const itemToCreate: TodoItem = { ...input, id: todoItems.length + 1 };
    todoItems.push(itemToCreate);
    const returnedItem: CreateTodoItemOutputDto = { ...itemToCreate };
    return returnedItem;
  }
}
