import { MemModel } from "../../../../infra/persistence/mem/models/memModel.js";

export interface ICreateMemRepo<T extends MemModel> {
  create: (input: Omit<T, "id">) => T;
}
