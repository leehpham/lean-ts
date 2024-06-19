import { MemEntity } from "../../../../entities/impls/mem/mem.entity";

export interface CreateMemRepo<T extends MemEntity> {
  create: (input: Omit<T, "id">) => T;
}
