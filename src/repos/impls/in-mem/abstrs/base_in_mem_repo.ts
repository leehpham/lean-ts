import { InMemRepo } from "./in_mem_repo";

export abstract class BaseInMemRepo<T> implements InMemRepo<T> {
  public abstract create(input: Omit<T, "id">): Promise<T>;

  public abstract getById(id: number): Promise<T | undefined>;

  public abstract getAll(): Promise<T[]>;

  public abstract update(input: T): Promise<T>;

  public abstract delete(id: number): Promise<void>;
}
