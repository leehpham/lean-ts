import "reflect-metadata";

import { Container, inject, injectable } from "inversify";

// eslint-disable-next-line @typescript-eslint/no-namespace
namespace InversifyTestBasics {
  export const TEST_TYPES = {
    Warrior: Symbol("Warrior"),
    Weapon: Symbol("Weapon"),
    ThrowableWeapon: Symbol("ThrowableWeapon"),
  };

  export interface Warrior {
    fight: () => string;
    sneak: () => string;
  }

  export interface Weapon {
    hit: () => string;
  }

  export interface ThrowableWeapon {
    throw: () => string;
  }

  @injectable()
  export class Katana implements Weapon {
    public hit(): string {
      return "cut!";
    }
  }

  @injectable()
  export class Shuriken implements ThrowableWeapon {
    public throw(): string {
      return "hit!";
    }
  }

  @injectable()
  export class Ninja implements Warrior {
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
      @inject(TEST_TYPES.Weapon) katana: Weapon,
      @inject(TEST_TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
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
    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(katana: Weapon, shuriken: ThrowableWeapon) {
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
  container.bind<Warrior>(TEST_TYPES.Warrior).to(Ninja);
  container.bind<Weapon>(TEST_TYPES.Weapon).to(Katana);
  container.bind<ThrowableWeapon>(TEST_TYPES.ThrowableWeapon).to(Shuriken);
}

describe("The Basics", () => {
  test("get a bound service object using its identifier, not its binding. Should throw errors", () => {
    expect(() =>
      InversifyTestBasics.container.get(InversifyTestBasics.Katana)
    ).toThrow(Error);
    expect(() =>
      InversifyTestBasics.container.get(InversifyTestBasics.Katana)
    ).toThrow(/No matching bindings/);
  });

  test("get a bound service object using its identifier. Behaviors should be the same as a regular object.", () => {
    const boundKatana =
      InversifyTestBasics.container.get<InversifyTestBasics.Weapon>(
        InversifyTestBasics.TEST_TYPES.Weapon
      );
    const katana = new InversifyTestBasics.Katana();
    expect(boundKatana.hit()).toBe(katana.hit());
  });

  test("let container resolve dependencies for client object registered inside it.", () => {
    const ninja =
      InversifyTestBasics.container.get<InversifyTestBasics.Warrior>(
        InversifyTestBasics.TEST_TYPES.Warrior
      );
    const katana = new InversifyTestBasics.Katana();
    const shuriken = new InversifyTestBasics.Shuriken();
    expect(ninja.fight()).toBe(katana.hit());
    expect(ninja.sneak()).toBe(shuriken.throw());
  });

  test("manually resolve dependencies for a regular client object.", () => {
    const katana =
      InversifyTestBasics.container.get<InversifyTestBasics.Weapon>(
        InversifyTestBasics.TEST_TYPES.Weapon
      );
    const shuriken =
      InversifyTestBasics.container.get<InversifyTestBasics.ThrowableWeapon>(
        InversifyTestBasics.TEST_TYPES.ThrowableWeapon
      );
    const samurai = new InversifyTestBasics.Samurai(katana, shuriken);
    expect(samurai.fight()).toBe(katana.hit());
    expect(samurai.sneak()).toBe(shuriken.throw());
  });
});
