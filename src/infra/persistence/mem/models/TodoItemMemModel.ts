import { TodoItem } from "../../../../core/entities/TodoItem";
import { MemModel } from "./MemModel";

export type TodoItemMemModel = MemModel & TodoItem & {};
