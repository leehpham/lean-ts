import { MemModel } from "../../../../infra/persistence/mem/models/memModel.js";

export interface IGetAllInMemRepo<T extends MemModel> {
  getAll: () => T[];
}
