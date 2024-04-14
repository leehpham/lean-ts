import { TodoItem } from "../../../../entities/todo_item.entity";

export class CreateTodoItemInputDto
  implements Pick<TodoItem, "title" | "description">
{
  public title!: string;
  public description!: string | null;
}
