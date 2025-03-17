import { TodoItem } from "../../../../core/entities/todoItem";
import { MemModel } from "./memModel";

export type TodoItemMemModel = MemModel & TodoItem & {};
