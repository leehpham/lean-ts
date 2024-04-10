import "reflect-metadata";

import { Container, injectable } from "inversify";

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace InversifyTestClassesSupport {
  interface Warrior {
    fight: () => string;
    sneak: () => string;
  }

  @injectable()
  export class Katana {
    public hit(): string {
      return "cut!";
    }
  }

  @injectable()
  export class Shuriken {
    public throw(): string {
      return "hit!";
    }
  }

  @injectable()
  export class Ninja implements Warrior {
    private _katana: Katana;
    private _shuriken: Shuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
      this._katana = katana;
      this._shuriken = shuriken;
    }

    public fight(): string {
      return this._katana.hit();
    }

    public sneak(): string {
      return this._shuriken.throw();
    }
  }

  export class Samurai implements Warrior {
    private _katana: Katana;
    private _shuriken: Shuriken;

    public constructor(katana: Katana, shuriken: Shuriken) {
      this._katana = katana;
      this._shuriken = shuriken;
    }

    public fight(): string {
      return this._katana.hit();
    }

    public sneak(): string {
      return this._shuriken.throw();
    }
  }

  export const container = new Container();
  container.bind<Ninja>(Ninja).toSelf();
  container.bind<Katana>(Katana).toSelf();
  container.bind<Shuriken>(Shuriken).toSelf();
}

describe("Support for classes", () => {
  test("resolving dependencies with registered client object.", () => {
    const ninja = InversifyTestClassesSupport.container.get(
      InversifyTestClassesSupport.Ninja
    );
    const katana = InversifyTestClassesSupport.container.get(
      InversifyTestClassesSupport.Katana
    );
    const shuriken = InversifyTestClassesSupport.container.get(
      InversifyTestClassesSupport.Shuriken
    );
    expect(ninja.fight()).toBe(katana.hit());
    expect(ninja.sneak()).toBe(shuriken.throw());
  });

  test("resolving dependencies without registering client object.", () => {
    const katana = InversifyTestClassesSupport.container.get(
      InversifyTestClassesSupport.Katana
    );
    const shuriken = InversifyTestClassesSupport.container.get(
      InversifyTestClassesSupport.Shuriken
    );
    const samurai = new InversifyTestClassesSupport.Samurai(katana, shuriken);
    expect(samurai.fight()).toBe(katana.hit());
    expect(samurai.sneak()).toBe(shuriken.throw());
  });
});
