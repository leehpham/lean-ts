import { Inject, Service } from "typedi";

import { ICreateMemRepo } from "../../../../../core/repos/mem/common/ICreateMemRepo";
import { TodoItemMemModel } from "../../../../../infra/persistence/mem/models/TodoItemMemModel";
import { TodoItemMemRepo } from "../../../../../infra/persistence/mem/repos/todo-item/TodoItemRepo";
import { CreateTodoItemInputDto } from "../../../../dto/todo-item/create/InputDto";
import { CreateTodoItemOutputDto } from "../../../../dto/todo-item/create/OutputDto";
import { IInputVldtr } from "../../../abstrs/IInputVldtr";
import { UseCaseTemplate } from "../../../abstrs/UseCaseTemplate";
import { CreateTodoItemInputValidator } from "./InputVldtr";

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
