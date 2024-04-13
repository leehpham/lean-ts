import { TodoItem } from "../../../../entities/todo_item.entity";

export class CreateTodoItemOutputDto implements TodoItem {
  public id!: number;
  public title!: string;
  public description?: string;
}
