import { cloneDeep, isEqual } from "lodash-es";

export class LodashFacade {
  public static cloneDeep<T>(value: T): T {
    return cloneDeep(value);
  }

  public static isEqual<T>(value: T, other: T): boolean {
    return isEqual(value, other);
  }
}
