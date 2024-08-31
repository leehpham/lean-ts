import { ITodoItem } from "../../../../core/entities/todo_item.entity";
import { MemEntity } from "./mem.entity";

export interface TodoItemMem extends MemEntity, ITodoItem {}
