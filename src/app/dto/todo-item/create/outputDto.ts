import { TodoItemMemModel } from "../../../../infra/persistence/mem/models/todoItemMemModel";

export type CreateTodoItemOutputDto = {
  created: TodoItemMemModel;
};
