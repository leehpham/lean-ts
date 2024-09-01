import { IValidator } from "../../../shared/interfaces/i_vldtr";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInputVldtr<Input, Output = void>
  extends IValidator<Input, Output> {}
