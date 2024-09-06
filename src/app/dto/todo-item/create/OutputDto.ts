import { TodoItemMemModel } from "../../../../infra/persistence/mem/models/TodoItemMemModel";

export type CreateTodoItemOutputDto = {
  created: TodoItemMemModel;
};
