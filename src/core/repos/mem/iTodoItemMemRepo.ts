import { TodoItemMemModel } from "../../../infra/persistence/mem/models/todoItemMemModel.js";
import { IInMemRepo } from "./common/iMemRepo.js";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface ITodoItemMemRepo extends IInMemRepo<TodoItemMemModel> {}
