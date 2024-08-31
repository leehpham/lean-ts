import { TodoItem } from "../../../../core/entities/todo_item";
import { IMemEntity } from "./i_mem_entity";

export interface TodoItemMem extends IMemEntity, TodoItem {}
