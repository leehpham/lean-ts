import { Katana, Ninja, Shuriken, ThrowableWeapon, Warrior, Weapon } from "./test_setup";
import { Container } from "inversify";
import { TEST_TYPES } from "./test_types";

export const container = new Container();
container.bind<Warrior>(TEST_TYPES.Warrior).to(Ninja);
container.bind<Weapon>(TEST_TYPES.Weapon).to(Katana);
container.bind<ThrowableWeapon>(TEST_TYPES.ThrowableWeapon).to(Shuriken);
