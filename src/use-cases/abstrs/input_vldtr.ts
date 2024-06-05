import { Validator } from "./vldtr";

export interface InputVldtr<Input, Output = void>
  extends Validator<Input, Output> {}
