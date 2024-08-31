import { Validator } from "../../../shared/interfaces/vldtr";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IInputVldtr<Input, Output = void>
  extends Validator<Input, Output> {}
