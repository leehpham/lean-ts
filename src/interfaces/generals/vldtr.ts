export interface Validator<Input, Output = void> {
  validate: (input: Input) => Promise<Output>;
}
