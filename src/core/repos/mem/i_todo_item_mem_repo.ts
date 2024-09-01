import { TodoItemMemModel } from "../../../infra/persistence/mem/models/todo_item_mem_model";
import { IInMemRepo } from "./common/i_mem_repo";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITodoItemMemRepo extends IInMemRepo<TodoItemMemModel> {}
