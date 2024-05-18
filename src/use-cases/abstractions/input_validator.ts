import { Validator } from "./validator";

export interface InputValidator<Input, Output = void>
  extends Validator<Input, Output> {}
