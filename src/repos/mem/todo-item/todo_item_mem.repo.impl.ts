import { Service } from "typedi";

import { MemDb } from "../../../../../../dbs/impls/mem/db";
import { MemTable } from "../../../../../../dbs/impls/mem/table";
import { TodoItemMem } from "../../../../../../entities/impls/mem/todo_item_mem.entity";
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
    this._table = MemDb.instance.createTable<TodoItemMem>("TodoItem");
  }

  public async create(input: Omit<TodoItemMem, "id">): Promise<TodoItemMem> {
    const key = this._table.insert(input);
    const inserted = this._table.get(key);
    if (!inserted) {
      throw new Error(
        Consts.ERR_GENS.create.insertedNotFound(key, this._table.name)
      );
    }
    return { ...inserted, id: parseInt(key) };
  }

  public async getById(id: number): Promise<TodoItemMem> {
    const record = this._table.get(id.toString());
    if (!record) {
      throw new Error(Consts.ERR_GENS.getById.notFound(id));
    }
    return record;
  }

  public async getAll(): Promise<TodoItemMem[]> {
    return this._table.getAll();
  }

  public async update(
    input: TodoItemMem & { id: number }
  ): Promise<TodoItemMem> {
    const isUpdated = this._table.update(input.id.toString(), input);
    if (isUpdated) {
      return this.getById(input.id);
    } else {
      throw new Error(Consts.ERR_GENS.update.failed(input.id));
    }
  }

  public async delete(id: number): Promise<void> {
    this._table.delete(id.toString());
  }
}
