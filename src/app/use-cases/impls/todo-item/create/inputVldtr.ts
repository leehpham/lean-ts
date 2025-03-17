import { Service } from "typedi";

import { CreateTodoItemInputDto } from "../../../../dto/todo-item/create/inputDto";
import { IInputVldtr } from "../../../abstrs/iInputVldtr";

@Service()
export class CreateTodoItemInputValidator
  implements IInputVldtr<CreateTodoItemInputDto>
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
