import { TodoItemMemEntity } from "../../../infra/persistence/mem/models/todo_item_mem_entity";
import { IInMemRepo } from "./common/i_mem_repo";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITodoItemMemRepo extends IInMemRepo<TodoItemMemEntity> {}
