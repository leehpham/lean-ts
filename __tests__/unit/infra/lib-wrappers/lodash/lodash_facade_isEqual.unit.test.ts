import { LodashFacade } from "../../../../../src/infra/lib-wrappers/lodash/lodash_facade";

describe("LodashFacade.isEqual", () => {
  type O = {
    o1: number;
    o2: undefined;
    o3: O3;
  };
  type O3 = {
    o31: string;
    o32?: null;
    o33: O33;
  };
  type O33 = {
    o331: boolean;
  };
  const obj: O = {
    o1: 10,
    o2: undefined,
    o3: {
      o31: "hello",
      o32: null,
      o33: {
        o331: true,
      },
    },
  };

  test("deeply equal objects are equal.", () => {
    const same: O = {
      o1: 10,
      o2: undefined,
      o3: {
        o31: "hello",
        o32: null,
        o33: {
          o331: true,
        },
      },
    };
    expect(LodashFacade.isEqual(obj, same)).toBe(true);
  });

  test("target object with different number is different", () => {
    const differentNumber: O = {
      o1: 20,
      o2: undefined,
      o3: {
        o31: "hello",
        o32: null,
        o33: {
          o331: true,
        },
      },
    };
    expect(LodashFacade.isEqual(obj, differentNumber)).toBe(false);
  });

  test("target object with different string is different", () => {
    const differentString: O = {
      o1: 10,
      o2: undefined,
      o3: {
        o31: "world",
        o32: null,
        o33: {
          o331: true,
        },
      },
    };
    expect(LodashFacade.isEqual(obj, differentString)).toBe(false);
  });

  test("target object with different boolean is different", () => {
    const differentBoolean: O = {
      o1: 10,
      o2: undefined,
      o3: {
        o31: "hello",
        o32: null,
        o33: {
          o331: false,
        },
      },
    };
    expect(LodashFacade.isEqual(obj, differentBoolean)).toBe(false);
  });

  test("target object with undefined is different from null", () => {
    const differentUndefined: O = {
      o1: 10,
      o2: undefined,
      o3: {
        o31: "hello",
        o32: undefined,
        o33: {
          o331: true,
        },
      },
    };
    expect(LodashFacade.isEqual(obj, differentUndefined)).toBe(false);
  });
});
