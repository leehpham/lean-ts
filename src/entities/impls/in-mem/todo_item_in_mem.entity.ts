import { TodoItem } from "../../abstrs/todo_item.entity";

export class TodoItemInMem implements TodoItem {
  public id!: number;
  public title!: string;
  public description?: string | null;
}
