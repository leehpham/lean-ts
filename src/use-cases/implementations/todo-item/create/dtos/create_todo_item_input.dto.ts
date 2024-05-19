import { TodoItem } from "../../../../../entities/abstractions/todo_item.entity";

export class CreateTodoItemInputDto implements Omit<TodoItem, "id"> {
  public title!: string;
  public description?: string | null;
}
