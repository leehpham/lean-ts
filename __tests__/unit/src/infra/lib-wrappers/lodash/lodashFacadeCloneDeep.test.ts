import { describe, expect, test } from "@jest/globals";

import { LodashFacade } from "../../../../../../src/infra/lib-wrappers/lodash/lodashFacade";

describe("LodashFacade.cloneDeep", () => {
  type Bar = {
    c: string;
  };
  type Foo = {
    a: number;
    b: Bar;
  };
  const input: Foo = {
    a: 10,
    b: {
      c: "hello",
    },
  };

  test("clone should be different from original object.", () => {
    const cloned = LodashFacade.cloneDeep(input);
    expect(cloned).not.toBe(input);
  });

  test("clone's values should be the same as original's", () => {
    const cloned = LodashFacade.cloneDeep(input);
    expect(cloned).toEqual(input);
  });

  test("changing clone's values should not affect original's", () => {
    const cloned = LodashFacade.cloneDeep(input);
    cloned.a = 11;
    expect(cloned.a).not.toBe(input.a);
    cloned.b.c = "world";
    expect(cloned.b.c).not.toBe(input.b.c);
  });
});
