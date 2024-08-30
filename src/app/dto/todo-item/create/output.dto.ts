import { TodoItemMem } from "../../../../infra/persistence/mem/models/todo_item.entity";

export type CreateTodoItemOutputDto = {
  created: TodoItemMem;
};
