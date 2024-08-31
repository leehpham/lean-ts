import { MemEntity } from "../../../../infra/persistence/mem/models/mem.entity";

export interface GetAllInMemRepo<T extends MemEntity> {
  getAll: () => T[];
}
