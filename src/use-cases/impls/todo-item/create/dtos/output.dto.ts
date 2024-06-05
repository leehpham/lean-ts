import { TodoItemInMem } from "../../../../../entities/impls/in-mem/todo_item_in_mem.entity";

export class CreateTodoItemOutputDto implements TodoItemInMem {
  public id!: number;
  public title!: string;
  public description?: string | null;
}
