import "reflect-metadata";

import { Container, Service } from "typedi";

interface InjectedService {
  processMsg: (msg: string) => string;
}

@Service()
class InjectedServiceImpl implements InjectedService {
  public processMsg(msg: string): string {
    return msg;
  }
}

@Service()
class ExampleService {
  private readonly _injectedService: InjectedService;

  public constructor(
    injectedService: InjectedService = Container.get(InjectedServiceImpl)
  ) {
    this._injectedService = injectedService;
  }

  public execute(msg: string): string {
    return this._injectedService.processMsg(msg);
  }
}

describe("Basic DI", () => {
  test("with constructor injection, passed", () => {
    const service = Container.get(ExampleService);
    const msg = "hello world";
    expect(service.execute(msg)).toBe(msg);
  });
});
