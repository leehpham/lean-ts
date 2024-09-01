import { MemModel } from "../models/mem_model";
import { InMemTableConsts as Consts } from "./table_consts";
import { MemTableOps } from "./table_ops";

export class MemTable<T extends MemModel> implements MemTableOps<T> {
  private _name: string;
  private readonly _data: Map<string, T>;

  public constructor(name: string) {
    name = name.trim();
    this.validateName(name);

    this._name = name;
    this._data = new Map();
  }

  public get name(): string {
    return this._name;
  }

  public set name(input: string) {
    input = input.trim();
    this.validateName(input);

    this._name = input;
  }

  private validateName(input: string): void {
    if (input.length === 0) {
      throw new Error(Consts.NAME.errs.empty);
    }
    if (input.length > Consts.NAME.maxLength) {
      throw new Error(Consts.NAME.errGens.lengthExceeded());
    }
  }

  public insert(data: Omit<T, "id">): T {
    const key = (
      Array.from(this._data.keys())
        .map((key) => parseInt(key))
        .reduce((prev, curr) => Math.max(prev, curr), 0) + 1
    ).toString();
    const entity: T = { id: parseInt(key), ...data } as T;
    this._data.set(key, entity);
    return entity;
  }

  public get(key: string): T | undefined {
    key = key.trim();
    return this._data.get(key);
  }

  public getAll(): T[] {
    return Array.from(this._data.values());
  }

  public update(key: string, data: Partial<Omit<T, "id">>): T {
    key = key.trim();
    const existingData = this._data.get(key);
    if (!existingData) {
      throw new Error(Consts.ERRS.insert.notExist);
    }
    return Object.assign(existingData, data);
  }

  public delete(key: string): boolean {
    key = key.trim();
    return this._data.delete(key);
  }

  public deleteAll(): void {
    this._data.clear();
  }
}
