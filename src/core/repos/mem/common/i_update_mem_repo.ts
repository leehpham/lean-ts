import { MemEntity } from "../../../../infra/persistence/mem/models/mem.entity";

export interface IUpdateInMemRepo<T extends MemEntity> {
  update: (id: number, input: Partial<Omit<T, "id">>) => T;
}
