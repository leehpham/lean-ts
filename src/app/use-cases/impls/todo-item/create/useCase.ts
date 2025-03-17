import { Inject, Service } from "typedi";

import { ICreateMemRepo } from "../../../../../core/repos/mem/common/iCreateMemRepo";
import { TodoItemMemModel } from "../../../../../infra/persistence/mem/models/todoItemMemModel";
import { TodoItemMemRepo } from "../../../../../infra/persistence/mem/repos/todo-item/todoItemRepo";
import { CreateTodoItemInputDto } from "../../../../dto/todo-item/create/inputDto";
import { CreateTodoItemOutputDto } from "../../../../dto/todo-item/create/outputDto";
import { IInputVldtr } from "../../../abstrs/iInputVldtr";
import { UseCaseTemplate } from "../../../abstrs/useCaseTemplate";
import { CreateTodoItemInputValidator } from "./inputVldtr";

@Service()
export class CreateTodoItemUseCase extends UseCaseTemplate<
  CreateTodoItemInputDto,
  CreateTodoItemOutputDto
> {
  protected readonly _inputValidator: IInputVldtr<CreateTodoItemInputDto>;

  private readonly _repoCreate: ICreateMemRepo<TodoItemMemModel>;

  public constructor(
    @Inject(() => CreateTodoItemInputValidator)
    inputValidator: IInputVldtr<CreateTodoItemInputDto>,
    @Inject(() => TodoItemMemRepo)
    repoCreate: ICreateMemRepo<TodoItemMemModel>
  ) {
    super();
    this._inputValidator = inputValidator;
    this._repoCreate = repoCreate;
  }

  protected async handleLogic(
    input: CreateTodoItemInputDto
  ): Promise<CreateTodoItemOutputDto> {
    const createdItem = this._repoCreate.create({ ...input });
    return { created: createdItem };
  }
}
