import { UseCase } from "./usecase";
import { Validator } from "./validator";

export abstract class UseCaseTemplate<Input, Output>
  implements UseCase<Input, Output>
{
  protected abstract _inputValidator: Validator<Input>;

  public async execute(input: Input): Promise<Output> {
    await this._inputValidator.validate(input);
    return await this.handleLogic(input);
  }

  protected abstract handleLogic(input: Input): Promise<Output>;
}
