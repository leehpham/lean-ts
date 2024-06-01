import "reflect-metadata";

import { Container, Inject, Service } from "typedi";

@Service()
class InjectedExampleClass {
  public processMsg(msg: string): string {
    return msg;
  }
}

@Service()
class ExampleClass {
  private readonly _withDecorator: InjectedExampleClass;
  private readonly _withoutDecorator: InjectedExampleClass;

  public constructor(
    @Inject()
    withDecorator: InjectedExampleClass,
    withoutDecorator: InjectedExampleClass
  ) {
    this._withDecorator = withDecorator;
    this._withoutDecorator = withoutDecorator;
  }

  public executeWithDecorator(msg: string): string {
    return this._withDecorator.processMsg(msg);
  }

  public executeWithoutDecorator(msg: string): string {
    return this._withoutDecorator.processMsg(msg);
  }
}

describe("@Inject decorator: Constructor injection", () => {
  test("constructor param marked with @Inject behaves correctly, passed.", () => {
    const msg = "hello world";
    const instance = Container.get(ExampleClass);

    const output = instance.executeWithDecorator(msg);

    expect(output).toBe(msg);
  });

  test("constructor param not marked with @Inject() behaves correctly, passed", () => {
    const instance = Container.get(ExampleClass);
    const msg = "hello world";

    const output = instance.executeWithoutDecorator(msg);

    expect(output).toBe(msg);
  });
});
