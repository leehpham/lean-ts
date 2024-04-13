import { Validator } from "../../../abstractions/validator";
import { CreateTodoItemInputDto } from "../dtos/create_todo_item_input.dto";

export class CreateTodoItemInputValidator
  implements Validator<CreateTodoItemInputDto>
{
  public async validate(input: CreateTodoItemInputDto): Promise<void> {
    input;
  }
}
