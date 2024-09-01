import { Service } from "typedi";

import { CreateTodoItemInputDto } from "../../../../dto/todo-item/create/input_dto";
import { IInputVldtr } from "../../../abstrs/i_input_vldtr";

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
