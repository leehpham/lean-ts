import { TodoItemInMem } from "../../entities/implementations/in-mem/todo_item_in_mem.entity";

export interface Database {
  createTodoItem: (input: Omit<TodoItemInMem, "id">) => Promise<TodoItemInMem>;
}
