import { InMemRepo } from "./mem_repo";

export abstract class BaseMemRepo<T> implements InMemRepo<T> {
  public abstract create(input: T): Promise<T & { id: number }>;

  public abstract getById(id: number): Promise<T | undefined>;

  public abstract getAll(): Promise<T[]>;

  public abstract update(input: T): Promise<T>;

  public abstract delete(id: number): Promise<void>;
}