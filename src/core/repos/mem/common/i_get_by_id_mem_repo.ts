import { MemEntity } from "../../../../infra/persistence/mem/models/mem.entity";

export interface IGetByIdInMemRepo<T extends MemEntity> {
  getById: (id: number) => T;
}
