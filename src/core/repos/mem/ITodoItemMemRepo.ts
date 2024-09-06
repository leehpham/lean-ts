import { TodoItemMemModel } from "../../../infra/persistence/mem/models/TodoItemMemModel";
import { IInMemRepo } from "./common/IMemRepo";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITodoItemMemRepo extends IInMemRepo<TodoItemMemModel> {}
