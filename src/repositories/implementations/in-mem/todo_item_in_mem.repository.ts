import { Database } from "../../../databases/abstractions/database";
import { DatabaseInMem } from "../../../databases/implementations/in-mem/database_in_mem";
import { TodoItemInMem } from "../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { Repository } from "../../abstractions/repository";

export class TodoItemInMemRepository implements Repository<TodoItemInMem> {
  private readonly _inMemDb: Database;

  public constructor(inMemDb: Database = new DatabaseInMem()) {
    this._inMemDb = inMemDb;
  }

  public async create(
    input: Omit<TodoItemInMem, "id">
  ): Promise<TodoItemInMem> {
    return this._inMemDb.createTodoItem(input);
  }
}
