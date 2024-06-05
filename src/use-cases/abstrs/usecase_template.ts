import { InputVldtr } from "./input_vldtr";
import { UseCase } from "./usecase";

export abstract class UseCaseTemplate<Input, Output>
  implements UseCase<Input, Output>
{
  protected abstract _inputValidator: InputVldtr<Input>;

  public async execute(input: Input): Promise<Output> {
    await this._inputValidator.validate(input);
    return await this.handleLogic(input);
  }

  protected abstract handleLogic(input: Input): Promise<Output>;
}
