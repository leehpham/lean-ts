import { TodoItem } from "../../../../entities/todo_item.entity";

export class CreateTodoItemInputDto implements Omit<TodoItem, "id"> {
  public title!: string;
  public description!: string | null;
}
