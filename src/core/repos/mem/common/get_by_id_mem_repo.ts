import { MemEntity } from "../../../../infra/persistence/mem/models/mem.entity";

export interface GetByIdInMemRepo<T extends MemEntity> {
  getById: (id: number) => T;
}
