import { TodoItemMemModel } from "../../../../infra/persistence/mem/models/todo_item_mem_model";

export type CreateTodoItemOutputDto = {
  created: TodoItemMemModel;
};
