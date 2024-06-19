import { MemEntity } from "../../../../entities/impls/mem/mem.entity";

export interface GetAllInMemRepo<T extends MemEntity> {
  getAll: () => T[];
}
