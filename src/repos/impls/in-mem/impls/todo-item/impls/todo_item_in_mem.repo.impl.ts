import { InMemDb } from "../../../../../../dbs/impls/in-mem/db";
import { InMemTable } from "../../../../../../dbs/impls/in-mem/table";
import { TodoItemInMem } from "../../../../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { BaseInMemRepo } from "../../../abstrs/base_in_mem_repo";
import { TodoItemInMemRepo } from "../abstrs/todo_item_in_mem.repo";

export class TodoItemInMemRepoImpl
  extends BaseInMemRepo<TodoItemInMem>
  implements TodoItemInMemRepo {
  private readonly _table: InMemTable<TodoItemInMem>;

  public constructor() {
    super();
    this._table = InMemDb.instance.createTable<TodoItemInMem>("TodoItem");
  }

  public async create(
    input: TodoItemInMem
  ): Promise<TodoItemInMem> {
    try {
      const key = this._table.insert(input);
      const inserted = this._table.get(key);
      if (!inserted) {
        throw new Error();
      }
      return inserted;
    } catch (err) {

    }
  }

  public async getById(id: number): Promise<TodoItemInMem | undefined> {
    return await this._table.getTodoItemById(id);
  }

  public async getAll(): Promise<TodoItemInMem[]> {
    return await this._table.getAllTodoItems();
  }

  public async update(input: TodoItemInMem): Promise<TodoItemInMem> {
    return await this._table.updateTodoItem(input);
  }

  public async delete(id: number): Promise<void> {
    return await this._table.deleteTodoItem(id);
  }
}
