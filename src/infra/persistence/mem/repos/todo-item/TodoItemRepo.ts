import { Service } from "typedi";

import { BaseMemRepo } from "../../../../../core/repos/mem/common/BaseMemRepo";
import { ITodoItemMemRepo } from "../../../../../core/repos/mem/ITodoItemMemRepo";
import { MemDb } from "../../impls/Db";
import { MemTable } from "../../impls/Table";
import { TodoItemMemModel } from "../../models/TodoItemMemModel";
import { TodoItemMemRepoConsts as Consts } from "./Consts";

@Service()
export class TodoItemMemRepo
  extends BaseMemRepo<TodoItemMemModel>
  implements ITodoItemMemRepo
{
  private readonly _table: MemTable<TodoItemMemModel>;

  public constructor() {
    super();
    const table = MemDb.instance.getTable<TodoItemMemModel>("TodoItem");
    if (!table) {
      this._table = MemDb.instance.createTable<TodoItemMemModel>("TodoItem");
    } else {
      this._table = table;
    }
  }

  public create(input: Omit<TodoItemMemModel, "id">): TodoItemMemModel {
    return this._table.insert(input);
  }

  public getById(id: number): TodoItemMemModel {
    const record = this._table.get(id.toString());
    if (!record) {
      throw new Error(Consts.ERR_GENS.getById.notFound(id));
    }
    return record;
  }

  public getAll(): TodoItemMemModel[] {
    return this._table.getAll();
  }

  public update(
    id: number,
    input: Partial<Omit<TodoItemMemModel, "id">>
  ): TodoItemMemModel {
    this.getById(id);
    return this._table.update(id.toString(), input);
  }

  public delete(id: number): void {
    const success = this._table.delete(id.toString());
    if (!success) {
      throw new Error(Consts.ERR_GENS.delete.failed(id));
    }
  }

  public deleteAll(): void {
    this._table.deleteAll();
  }
}
