import { Database } from "../../../../../../dbs/abstrs/database";
import { inMemDb } from "../../../../../../dbs/impls/in-mem/database_in_mem";
import { TodoItemInMem } from "../../../../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { BaseInMemRepo } from "../../../abstrs/base_in_mem_repo";
import { TodoItemInMemRepo } from "../abstrs/todo_item_in_mem.repo";

export class TodoItemInMemRepoImpl
  extends BaseInMemRepo<TodoItemInMem>
  implements TodoItemInMemRepo
{
  private readonly _inMemDb: Database;

  public constructor(db: Database = inMemDb) {
    super();
    this._inMemDb = db;
  }

  public async create(
    input: Omit<TodoItemInMem, "id">
  ): Promise<TodoItemInMem> {
    return this._inMemDb.createTodoItem(input);
  }

  public async getById(id: number): Promise<TodoItemInMem | undefined> {
    return await this._inMemDb.getTodoItemById(id);
  }

  public async getAll(): Promise<TodoItemInMem[]> {
    return await this._inMemDb.getAllTodoItems();
  }

  public async update(input: TodoItemInMem): Promise<TodoItemInMem> {
    return await this._inMemDb.updateTodoItem(input);
  }

  public async delete(id: number): Promise<void> {
    return await this._inMemDb.deleteTodoItem(id);
  }
}
