import { TodoItemInMem } from "../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { Database } from "../../abstractions/database";
import { InMemDatabaseState } from "./in_mem_database_state";

export class DatabaseInMem implements Database {
  private readonly state: InMemDatabaseState;

  public constructor() {
    this.state = {
      todoItems: [],
    };
  }

  public async createTodoItem(
    input: Omit<TodoItemInMem, "id">
  ): Promise<TodoItemInMem> {
    const itemToCreate: TodoItemInMem = {
      id: this.state.todoItems.length + 1,
      ...input,
    };
    this.state.todoItems.push(itemToCreate);
    return itemToCreate;
  }

  public async getTodoItemById(id: number): Promise<TodoItemInMem | undefined> {
    return this.state.todoItems.find((item) => item.id === id);
  }

  public async getAllTodoItems(): Promise<TodoItemInMem[]> {
    return this.state.todoItems;
  }

  public async updateTodoItem(input: TodoItemInMem): Promise<TodoItemInMem> {
    for (let item of this.state.todoItems) {
      if (item.id === input.id) {
        item = { ...input };
        break;
      }
    }
    const updatedItem = this.state.todoItems.find(
      (item) => item.id === input.id
    );
    if (!updatedItem) {
      throw new Error(`Cannot find updated TodoItem with id - ${input.id}`);
    }
    return updatedItem;
  }

  public async delete(id: number): Promise<void> {}
}

// TODO: replace with a DI init.
export const inMemDb = new DatabaseInMem();
