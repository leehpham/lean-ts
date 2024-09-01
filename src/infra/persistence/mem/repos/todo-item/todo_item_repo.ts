import { Service } from "typedi";

import { BaseMemRepo } from "../../../../../core/repos/mem/common/base_mem_repo";
import { ITodoItemMemRepo } from "../../../../../core/repos/mem/i_todo_item_mem_repo";
import { MemDb } from "../../impls/db";
import { MemTable } from "../../impls/table";
import { TodoItemMemEntity } from "../../models/todo_item_mem_entity";
import { TodoItemMemRepoConsts as Consts } from "./consts";

@Service()
export class TodoItemMemRepo
  extends BaseMemRepo<TodoItemMemEntity>
  implements ITodoItemMemRepo
{
  private readonly _table: MemTable<TodoItemMemEntity>;

  public constructor() {
    super();
    const table = MemDb.instance.getTable<TodoItemMemEntity>("TodoItem");
    if (!table) {
      this._table = MemDb.instance.createTable<TodoItemMemEntity>("TodoItem");
    } else {
      this._table = table;
    }
  }

  public create(input: Omit<TodoItemMemEntity, "id">): TodoItemMemEntity {
    return this._table.insert(input);
  }

  public getById(id: number): TodoItemMemEntity {
    const record = this._table.get(id.toString());
    if (!record) {
      throw new Error(Consts.ERR_GENS.getById.notFound(id));
    }
    return record;
  }

  public getAll(): TodoItemMemEntity[] {
    return this._table.getAll();
  }

  public update(
    id: number,
    input: Partial<Omit<TodoItemMemEntity, "id">>
  ): TodoItemMemEntity {
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
