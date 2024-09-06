import "reflect-metadata";

import { Container, Inject, Service } from "typedi";

interface Processor {
  process: (msg: string) => string;
}

@Service()
class InjectedExampleClass implements Processor {
  public process(msg: string): string {
    return msg;
  }
}

@Service()
class BetterInjectedClass implements Processor {
  public process(msg: string): string {
    return `better ${msg}`;
  }
}

@Service()
class ExampleClass {
  private readonly _normal: Processor;
  private readonly _better: Processor;

  public constructor(
    @Inject(() => InjectedExampleClass)
    normal: Processor,
    @Inject(() => BetterInjectedClass)
    better: Processor
  ) {
    this._normal = normal;
    this._better = better;
  }

  public processNormal(msg: string): string {
    return this._normal.process(msg);
  }

  public processBetter(msg: string): string {
    return this._better.process(msg);
  }
}

describe("@Inject decorator: Explicitly requesting target type", () => {
  test("_normal field gets an instance of InjectedExampleClass, passed", () => {
    const service = Container.get(ExampleClass);
    const msg = "hello world";

    const output = service.processNormal(msg);

    expect(output).toBe(msg);
  });

  test("_better field gets an instance of BetterInjectedClass, passed", () => {
    const service = Container.get(ExampleClass);
    const msg = "hello world";

    const output = service.processBetter(msg);

    expect(output).toBe(`better ${msg}`);
  });
});
