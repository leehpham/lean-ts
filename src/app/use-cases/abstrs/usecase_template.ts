import { IInputVldtr } from "./i_input_vldtr";
import { IUseCase } from "./i_usecase";

export abstract class UseCaseTemplate<Input, Output>
  implements IUseCase<Input, Output>
{
  protected abstract _inputValidator: IInputVldtr<Input>;

  public async execute(input: Input): Promise<Output> {
    await this._inputValidator.validate(input);
    return await this.handleLogic(input);
  }

  protected abstract handleLogic(input: Input): Promise<Output>;
}
