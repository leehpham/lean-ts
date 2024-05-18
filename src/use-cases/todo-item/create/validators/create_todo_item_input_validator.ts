import { InputValidator } from "../../../abstractions/input_validator";
import { CreateTodoItemInputDto } from "../dtos/create_todo_item_input.dto";

export class CreateTodoItemInputValidator
  implements InputValidator<CreateTodoItemInputDto>
{
  public async validate(input: CreateTodoItemInputDto): Promise<void> {
    if (input.title.length === 0) {
      throw new Error("Title should not be empty.");
    }

    if (input.description?.length === 0) {
      throw new Error("Description should not be empty.");
    }
  }
}
