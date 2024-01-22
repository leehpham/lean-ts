import { cloneDeep } from "lodash";

export class LodashFacade {
  public static cloneDeep<T>(value: T): T {
    return cloneDeep(value);
  }
}
