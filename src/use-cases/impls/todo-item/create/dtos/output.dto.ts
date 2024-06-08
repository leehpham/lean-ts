import { TodoItemMem } from "../../../../../entities/impls/in-mem/todo_item_in_mem.entity";

export type CreateTodoItemOutputDto = TodoItemMem & {
  id: number;
};
