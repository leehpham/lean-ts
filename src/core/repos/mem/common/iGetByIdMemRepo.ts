import { MemModel } from "../../../../infra/persistence/mem/models/memModel";

export interface IGetByIdInMemRepo<T extends MemModel> {
  getById: (id: number) => T;
}
