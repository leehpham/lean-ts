import { MemModel } from "../../../../infra/persistence/mem/models/MemModel";

export interface IGetByIdInMemRepo<T extends MemModel> {
  getById: (id: number) => T;
}
