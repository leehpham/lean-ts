import { Database } from "../../../../databases/abstractions/database";
import { inMemDb } from "../../../../databases/implementations/in-mem/database_in_mem";
import { TodoItemInMem } from "../../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { InMemRepo } from "../abstractions/in_mem_repo";

export class TodoItemInMemRepository implements InMemRepo<TodoItemInMem> {
  private readonly _inMemDb: Database;

  public constructor(db: Database = inMemDb) {
    this._inMemDb = db;
  }

  public async create(
    input: Omit<TodoItemInMem, "id">
  ): Promise<TodoItemInMem> {
    return this._inMemDb.createTodoItem(input);
  }

  public async getById(id: number): Promise<TodoItemInMem | undefined> {
    return this._inMemDb.getTodoItemById(id);
  }

  public async getAll(): Promise<TodoItemInMem[]> {
    return this._inMemDb.getAllTodoItems();
  }

  public async update(input: TodoItemInMem): Promise<TodoItemInMem> {
    return this._inMemDb.updateTodoItem(input);
  }
}
