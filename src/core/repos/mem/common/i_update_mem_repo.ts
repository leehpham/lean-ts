import { MemModel } from "../../../../infra/persistence/mem/models/mem_model";

export interface IUpdateInMemRepo<T extends MemModel> {
  update: (id: number, input: Partial<Omit<T, "id">>) => T;
}
