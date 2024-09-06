import "reflect-metadata";

import { Container, Service } from "typedi";

@Service()
class ExampleInjectedService {
  public processMsg(msg: string): string {
    return msg;
  }
}

@Service()
class ExampleService {
  private readonly _injectedService: ExampleInjectedService;

  public constructor(injectedService: ExampleInjectedService) {
    this._injectedService = injectedService;
  }

  public execute(msg: string): string {
    return this._injectedService.processMsg(msg);
  }
}

describe("Basic usage", () => {
  test("TypeDI automatically injects an instance of ExampleInjectedService.", () => {
    const serviceInstance = Container.get(ExampleService);
    const msg = "hello world";
    expect(serviceInstance.execute(msg)).toBe(msg);
  });
});
