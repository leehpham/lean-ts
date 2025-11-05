import { MemModel } from "../../../../infra/persistence/mem/models/memModel.js";

export interface IGetByIdInMemRepo<T extends MemModel> {
  getById: (id: number) => T;
}
