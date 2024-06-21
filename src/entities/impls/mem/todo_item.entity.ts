import { ITodoItem } from "../../abstrs/todo_item.entity";
import { MemEntity } from "./mem.entity";

export interface TodoItemMem extends MemEntity, ITodoItem {}
