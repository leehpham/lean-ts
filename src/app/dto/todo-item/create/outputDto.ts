import { TodoItemMemModel } from "../../../../infra/persistence/mem/models/todoItemMemModel.js";

export type CreateTodoItemOutputDto = {
  created: TodoItemMemModel;
};
