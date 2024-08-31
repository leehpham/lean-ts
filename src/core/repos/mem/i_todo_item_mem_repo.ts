import { TodoItemMem } from "../../../infra/persistence/mem/models/i_todo_item_entity";
import { IInMemRepo } from "./common/i_mem_repo";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITodoItemMemRepo extends IInMemRepo<TodoItemMem> {}
