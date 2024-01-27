import { inject, injectable } from "inversify";
import { TEST_TYPES } from "./test_types";

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
