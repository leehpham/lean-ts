import { TodoItem } from "../../../../core/entities/todo_item";
import { MemModel } from "./mem_model";

export type TodoItemMemModel = MemModel & TodoItem & {};
