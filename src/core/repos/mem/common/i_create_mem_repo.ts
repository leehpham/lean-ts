import { MemEntity } from "../../../../infra/persistence/mem/models/mem.entity";

export interface ICreateMemRepo<T extends MemEntity> {
  create: (input: Omit<T, "id">) => T;
}
