import { MemModel } from "../../../../infra/persistence/mem/models/mem_model";

export interface IGetByIdInMemRepo<T extends MemModel> {
  getById: (id: number) => T;
}
