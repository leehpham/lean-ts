import { Inject, Service } from "typedi";

import { ICreateMemRepo } from "../../../../../core/repos/mem/common/i_create_mem_repo";
import { TodoItemMemModel } from "../../../../../infra/persistence/mem/models/todo_item_mem_model";
import { TodoItemMemRepo } from "../../../../../infra/persistence/mem/repos/todo-item/todo_item_repo";
import { CreateTodoItemInputDto } from "../../../../dto/todo-item/create/input_dto";
import { CreateTodoItemOutputDto } from "../../../../dto/todo-item/create/output_dto";
import { IInputVldtr } from "../../../abstrs/i_input_vldtr";
import { UseCaseTemplate } from "../../../abstrs/usecase_template";
import { CreateTodoItemInputValidator } from "./input_vldtr";

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
