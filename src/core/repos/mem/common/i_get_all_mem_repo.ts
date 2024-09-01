import { MemModel } from "../../../../infra/persistence/mem/models/mem_model";

export interface IGetAllInMemRepo<T extends MemModel> {
  getAll: () => T[];
}
