import { MemEntity } from "../../../../entities/impls/mem/mem.entity";

export interface UpdateInMemRepo<T extends MemEntity> {
  update: (id: number, input: Partial<Omit<T, "id">>) => T;
}
