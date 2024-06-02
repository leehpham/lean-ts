import { InMemTableConsts } from "./constants/table_consts";
import { InMemTableOps } from "./table_ops";

export class InMemTable<T> implements InMemTableOps<T> {
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
      throw new Error("Table name should not be empty");
    }
    if (input.length > InMemTableConsts.NAME.maxLength) {
      throw new Error(
        `Table name should not be longer than ${InMemTableConsts.NAME.maxLength}.`
      );
    }
  }

  public insert(data: T): string {
    const key = (this._data.size + 1).toString();
    this._data.set(key, data);
    return key;
  }

  public get(key: string): T | undefined {
    key = key.trim();
    return this._data.get(key);
  }

  public update(key: string, data: Partial<T>): boolean {
    key = key.trim();
    const existingData = this._data.get(key);
    if (!existingData) {
      return false;
    }
    Object.assign(existingData, data);
    return true;
  }
}
