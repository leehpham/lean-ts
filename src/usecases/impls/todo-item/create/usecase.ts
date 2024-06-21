import { Inject, Service } from "typedi";

import { TodoItemMem } from "../../../../entities/impls/mem/todo_item.entity";
import { CreateMemRepo } from "../../../../interfaces/repos/mem/common/create_mem_repo";
import { TodoItemMemRepoImpl } from "../../../../repos/mem/todo-item/todo_item.repo";
import { InputVldtr } from "../../../abstrs/input_vldtr";
import { UseCaseTemplate } from "../../../abstrs/usecase_template";
import { CreateTodoItemInputDto } from "./dtos/input.dto";
import { CreateTodoItemOutputDto } from "./dtos/output.dto";
import { CreateTodoItemInputValidator } from "./vldtrs/input_vldtr";

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
