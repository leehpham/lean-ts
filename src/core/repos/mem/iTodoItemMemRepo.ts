import { TodoItemMemModel } from "../../../infra/persistence/mem/models/todoItemMemModel";
import { IInMemRepo } from "./common/iMemRepo";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITodoItemMemRepo extends IInMemRepo<TodoItemMemModel> {}
