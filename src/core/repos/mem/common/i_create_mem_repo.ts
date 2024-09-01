import { MemEntity } from "../../../../infra/persistence/mem/models/mem_entity";

export interface ICreateMemRepo<T extends MemEntity> {
  create: (input: Omit<T, "id">) => T;
}
