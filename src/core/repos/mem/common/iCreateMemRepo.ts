import { MemModel } from "../../../../infra/persistence/mem/models/memModel";

export interface ICreateMemRepo<T extends MemModel> {
  create: (input: Omit<T, "id">) => T;
}
