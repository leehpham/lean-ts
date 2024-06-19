import { TodoItemMem } from "../../../entities/impls/mem/todo_item_mem.entity";
import { InMemRepo } from "./common/mem_repo";

export interface TodoItemMemRepo extends InMemRepo<TodoItemMem> {}
