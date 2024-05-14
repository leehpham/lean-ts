import { TodoItemInMem } from "../../../entities/implementations/in-mem/todo_item_in_mem.entity";

export type InMemDatabaseState = {
  todoItems: TodoItemInMem[];
};
