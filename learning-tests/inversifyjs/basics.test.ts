import "reflect-metadata";
import { TEST_TYPES } from "./test_types";
import { Warrior } from "./test_setup";
import { container } from "./test_inversify.config";

describe("foo", () => {
  test("bar", () => {
    const ninja = container.get<Warrior>(TEST_TYPES.Warrior);
    expect(ninja.fight()).toBe("cut!");
    expect(ninja.sneak()).toBe("hit!");
  });
});
