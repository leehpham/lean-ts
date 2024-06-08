import { TodoItemInMem } from "../../../entities/impls/in-mem/todo_item_in_mem.entity";

export type InMemDatabaseState = {
  todoItems: TodoItemInMem[];
};
