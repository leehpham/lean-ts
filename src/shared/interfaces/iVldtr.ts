export interface IValidator<Input, Output = void> {
  validate: (input: Input) => Promise<Output>;
}
