import { TodoItemInMem } from "../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { Database } from "../../abstractions/database";
import { InMemDatabaseState } from "./in_mem_database_state";

export class DatabaseInMem implements Database {
  private readonly _state: InMemDatabaseState;

  public constructor() {
    this._state = {
      todoItems: [],
    };
  }

  public async createTodoItem(
    input: Omit<TodoItemInMem, "id">
  ): Promise<TodoItemInMem> {
    const itemToCreate: TodoItemInMem = {
      id: this._state.todoItems.length + 1,
      ...input,
    };
    this._state.todoItems.push(itemToCreate);
    return itemToCreate;
  }
}
