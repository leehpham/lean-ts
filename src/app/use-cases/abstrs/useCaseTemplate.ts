import { IInputVldtr } from "./iInputVldtr";
import { IUseCase } from "./iUseCase";

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
