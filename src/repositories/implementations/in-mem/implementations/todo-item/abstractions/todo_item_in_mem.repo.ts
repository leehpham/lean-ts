import { TodoItemInMem } from "../../../../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { InMemRepo } from "../../../abstractions/in_mem_repo";

export interface TodoItemInMemRepo extends InMemRepo<TodoItemInMem> {}
