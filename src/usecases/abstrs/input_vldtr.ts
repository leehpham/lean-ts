import { Validator } from "../../interfaces/generals/vldtr";

export interface InputVldtr<Input, Output = void>
  extends Validator<Input, Output> {}
