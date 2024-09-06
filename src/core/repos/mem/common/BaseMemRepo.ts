import { MemModel } from "../../../../infra/persistence/mem/models/MemModel";
import { IInMemRepo } from "./IMemRepo";

export abstract class BaseMemRepo<T extends MemModel> implements IInMemRepo<T> {
  public abstract create(input: Omit<T, "id">): T;

  public abstract getById(id: number): T;

  public abstract getAll(): T[];

  public abstract update(id: number, input: Partial<Omit<T, "id">>): T;

  public abstract delete(id: number): void;

  public abstract deleteAll(): void;
}
