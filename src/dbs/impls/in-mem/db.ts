import { InMemDbOps } from "./db_ops";
import { InMemTable } from "./table";

export class InMemDb implements InMemDbOps {
  private static _instance: InMemDb | undefined;

  private readonly _tables: Map<string, InMemTable<unknown>>;

  private constructor() {
    this._tables = new Map();
  }

  public static get instance(): InMemDb {
    if (!InMemDb._instance) {
      InMemDb._instance = new InMemDb();
    }
    return InMemDb._instance;
  }

  public createTable<T>(name: string): InMemTable<T> {
    name = name.trim();
    if (name.length === 0) {
      throw new Error("Table name cannot be empty.");
    }
    if (this._tables.has(name)) {
      throw new Error(`Table "${name}" already exists.`);
    }
    const table = new InMemTable<T>(name);
    this._tables.set(name, table);
    return table;
  }

  public getTable<T>(name: string): InMemTable<T> | undefined {
    name = name.trim();
    return this._tables.get(name) as InMemTable<T>;
  }
}
