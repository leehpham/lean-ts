import { TodoItem } from "../../abstrs/todo_item.entity";

export interface TodoItemInMem extends TodoItem {
  title: string;
  description?: string | null;
}
