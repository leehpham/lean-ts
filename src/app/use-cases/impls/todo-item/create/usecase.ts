import { Inject, Service } from "typedi";

import { CreateMemRepo } from "../../../../../core/repos/mem/common/create_mem_repo";
import { TodoItemMem } from "../../../../../infra/persistence/mem/models/todo_item.entity";
import { TodoItemMemRepoImpl } from "../../../../../infra/persistence/mem/repos/todo-item/todo_item.repo";
import { CreateTodoItemInputDto } from "../../../../dto/todo-item/create/input.dto";
import { CreateTodoItemOutputDto } from "../../../../dto/todo-item/create/output.dto";
import { InputVldtr } from "../../../abstrs/input_vldtr";
import { UseCaseTemplate } from "../../../abstrs/usecase_template";
import { CreateTodoItemInputValidator } from "./input_vldtr";

@Service()
export class CreateTodoItemUseCase extends UseCaseTemplate<
  CreateTodoItemInputDto,
  CreateTodoItemOutputDto
> {
  protected readonly _inputValidator: InputVldtr<CreateTodoItemInputDto>;

  private readonly _repoCreate: CreateMemRepo<TodoItemMem>;

  public constructor(
    @Inject(() => CreateTodoItemInputValidator)
    inputValidator: InputVldtr<CreateTodoItemInputDto>,
    @Inject(() => TodoItemMemRepoImpl)
    repoCreate: CreateMemRepo<TodoItemMem>
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
