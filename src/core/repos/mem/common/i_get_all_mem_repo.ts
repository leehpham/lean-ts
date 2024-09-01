import { MemEntity } from "../../../../infra/persistence/mem/models/mem.entity";

export interface IGetAllInMemRepo<T extends MemEntity> {
  getAll: () => T[];
}
