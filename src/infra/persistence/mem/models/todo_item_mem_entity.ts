import { TodoItem } from "../../../../core/entities/todo_item";
import { MemEntity } from "./mem_entity";

export type TodoItemMemEntity = MemEntity & TodoItem & {};
