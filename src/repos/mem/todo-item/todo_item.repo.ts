import { Service } from "typedi";

import { TodoItemMem } from "../../../entities/impls/mem/todo_item.entity";
import { MemDb } from "../../../frameworks/dbs/mem/db";
import { MemTable } from "../../../frameworks/dbs/mem/table";
import { BaseMemRepo } from "../../../interfaces/repos/mem/common/base_mem_repo";
import { TodoItemMemRepo } from "../../../interfaces/repos/mem/todo_item_mem.repo";
import { TodoItemMemRepoConsts as Consts } from "./consts";

@Service()
export class TodoItemMemRepoImpl
  extends BaseMemRepo<TodoItemMem>
  implements TodoItemMemRepo
{
  private readonly _table: MemTable<TodoItemMem>;

  public constructor() {
    super();
    const table = MemDb.instance.getTable<TodoItemMem>("TodoItem");
    if (!table) {
      this._table = MemDb.instance.createTable<TodoItemMem>("TodoItem");
    } else {
      this._table = table;
    }
  }

  public create(input: Omit<TodoItemMem, "id">): TodoItemMem {
    return this._table.insert(input);
  }

  public getById(id: number): TodoItemMem {
    const record = this._table.get(id.toString());
    if (!record) {
      throw new Error(Consts.ERR_GENS.getById.notFound(id));
    }
    return record;
  }

  public getAll(): TodoItemMem[] {
    return this._table.getAll();
  }

  public update(
    id: number,
    input: Partial<Omit<TodoItemMem, "id">>
  ): TodoItemMem {
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
