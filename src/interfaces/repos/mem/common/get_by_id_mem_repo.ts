import { MemEntity } from "../../../../entities/impls/mem/mem.entity";

export interface GetByIdInMemRepo<T extends MemEntity> {
  getById: (id: number) => T;
}
