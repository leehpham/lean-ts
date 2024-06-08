import { Service } from "typedi";

import { InputVldtr } from "../../../../abstrs/input_vldtr";
import { CreateTodoItemInputDto } from "../dtos/input.dto";

@Service()
export class CreateTodoItemInputValidator
  implements InputVldtr<CreateTodoItemInputDto>
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
