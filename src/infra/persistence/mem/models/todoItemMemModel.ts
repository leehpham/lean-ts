import { TodoItem } from "../../../../core/entities/todoItem.js";
import { MemModel } from "./memModel.js";

export type TodoItemMemModel = MemModel & TodoItem & {};
