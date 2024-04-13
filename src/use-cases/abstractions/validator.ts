export interface Validator<Input> {
  validate: (input: Input) => Promise<void>;
}
