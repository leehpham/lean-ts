import { MemModel } from "../../../../infra/persistence/mem/models/memModel";

export interface IGetAllInMemRepo<T extends MemModel> {
  getAll: () => T[];
}
