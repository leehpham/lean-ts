import { TodoItemInMem } from "../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { Database } from "../../abstrs/database";
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
    const indexToUpdate = this.state.todoItems.findIndex(
      (item) => item.id === input.id
    );
    if (indexToUpdate !== -1) {
      this.state.todoItems[indexToUpdate] = {
        ...this.state.todoItems[indexToUpdate],
        ...input,
      };
    } else {
      throw new Error(`Cannot find TodoItem with id - ${input.id} to update.`);
    }

    const updatedItem = this.state.todoItems.find(
      (item) => item.id === input.id
    );
    if (!updatedItem) {
      throw new Error(`Cannot find updated TodoItem with id - ${input.id}`);
    }
    return updatedItem;
  }

  public async deleteTodoItem(id: number): Promise<void> {
    const indexToDelete = this.state.todoItems.findIndex(
      (item) => item.id === id
    );
    if (indexToDelete === -1) {
      throw new Error(`Cannot delete TodoItem with id - ${id}`);
    }
    this.state.todoItems.splice(indexToDelete, 1);
  }
}

// TODO: replace with a DI init.
export const inMemDb = new DatabaseInMem();
