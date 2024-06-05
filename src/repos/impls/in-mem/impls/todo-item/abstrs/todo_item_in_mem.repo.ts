import { TodoItemInMem } from "../../../../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { InMemRepo } from "../../../abstrs/in_mem_repo";

export interface TodoItemInMemRepo extends InMemRepo<TodoItemInMem> {}
