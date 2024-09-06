import { MemModel } from "../../../../infra/persistence/mem/models/MemModel";

export interface ICreateMemRepo<T extends MemModel> {
  create: (input: Omit<T, "id">) => T;
}
