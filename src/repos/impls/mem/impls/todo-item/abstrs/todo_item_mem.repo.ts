import { TodoItemInMem } from "../../../../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { InMemRepo } from "../../../abstrs/mem_repo";

export interface TodoItemMemRepo extends InMemRepo<TodoItemInMem> {}
