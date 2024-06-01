// Note: These tests are written just for the sake of completeness.
// Generally, classes with no constructors should be avoided all together.

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
  @Inject()
  public withDecorator!: InjectedExampleClass;

  public withoutDecorator!: InjectedExampleClass;
}

describe("@Inject decorator: Propery injection", () => {
  test("property marked with @Inject behaves correctly, passed.", () => {
    const msg = "hello world";
    const instance = Container.get(ExampleClass);

    const output = instance.withDecorator.processMsg(msg);

    expect(output).toBe(msg);
  });

  test("property not marked with @Inject() is undefined, passed", () => {
    const instance = Container.get(ExampleClass);

    expect(instance.withoutDecorator).toBeUndefined();
  });
});
