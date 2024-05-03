import { Validator } from "../../../abstractions/validator";
import { CreateTodoItemInputDto } from "../dtos/create_todo_item_input.dto";

export class CreateTodoItemInputValidator
  implements Validator<CreateTodoItemInputDto>
{
  public async validate(input: CreateTodoItemInputDto): Promise<void> {
    if (input.title.length === 0) {
      throw new Error("Title should not be empty");
    }
  }
}
