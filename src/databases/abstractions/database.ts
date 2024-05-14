import { TodoItem } from "../../entities/abstractions/todo_item.entity";

export interface Database {
  createTodoItem: (input: Omit<TodoItem, "id">) => Promise<TodoItem>;
  getTodoItemById: (id: number) => Promise<TodoItem | undefined>;
  getAllTodoItems: () => Promise<TodoItem[]>;
  updateTodoItem: (input: TodoItem) => Promise<TodoItem>;
  deleteTodoItem: (id: number) => Promise<void>;
}
