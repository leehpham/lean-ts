import { MemDb } from "../../../../../../dbs/impls/mem/db";
import { MemTable } from "../../../../../../dbs/impls/mem/table";
import { TodoItemInMem } from "../../../../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { BaseMemRepo } from "../../../abstrs/base_mem_repo";
import { TodoItemMemRepo } from "../abstrs/todo_item_mem.repo";
import { TodoItemMemRepoConsts as Consts } from "../consts/consts";

export class TodoItemMemRepoImpl
  extends BaseMemRepo<TodoItemInMem>
  implements TodoItemMemRepo
{
  private readonly _table: MemTable<TodoItemInMem>;

  public constructor() {
    super();
    this._table = MemDb.instance.createTable<TodoItemInMem>("TodoItem");
  }

  public async create(input: TodoItemInMem): Promise<TodoItemInMem> {
    const key = this._table.insert(input);
    const inserted = this._table.get(key);
    if (!inserted) {
      throw new Error(
        Consts.ERR_GENS.create.insertedNotFound(key, this._table.name)
      );
    }
    return inserted;
  }

  public async getById(id: number): Promise<TodoItemInMem | undefined> {
    return this._table.get(id.toString());
  }

  public async getAll(): Promise<TodoItemInMem[]> {
    return await this._table.getAllTodoItems();
  }

  public async update(input: TodoItemInMem): Promise<TodoItemInMem> {
    const isUpdated = this._table.update(input);
  }

  public async delete(id: number): Promise<void> {
    return await this._table.deleteTodoItem(id);
  }
}
