import { MemModel } from "../../../../infra/persistence/mem/models/mem_model";

export interface ICreateMemRepo<T extends MemModel> {
  create: (input: Omit<T, "id">) => T;
}
