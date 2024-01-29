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

  interface Weapon {
    hit: () => string;
  }

  interface ThrowableWeapon {
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
    private _katata: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
      @inject(TEST_TYPES.Weapon) katana: Weapon,
      @inject(TEST_TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
      this._katata = katana;
      this._shuriken = shuriken;
    }

    public fight(): string {
      return this._katata.hit();
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
  test("resolving dependencies.", () => {
    const ninja =
      InversifyTestBasics.container.get<InversifyTestBasics.Warrior>(
        InversifyTestBasics.TEST_TYPES.Warrior
      );
    const katana = new InversifyTestBasics.Katana();
    const shuriken = new InversifyTestBasics.Shuriken();
    expect(ninja.fight()).toBe(katana.hit());
    expect(ninja.sneak()).toBe(shuriken.throw());
  });
});
