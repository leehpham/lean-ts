import { MemModel } from "../../../../infra/persistence/mem/models/MemModel";

export interface IGetAllInMemRepo<T extends MemModel> {
  getAll: () => T[];
}
