import { MemModel } from "../../../../infra/persistence/mem/models/memModel.js";

export interface IUpdateInMemRepo<T extends MemModel> {
  update: (id: number, input: Partial<Omit<T, "id">>) => T;
}
