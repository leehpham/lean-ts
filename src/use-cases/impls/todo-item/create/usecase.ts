import { Inject, Service } from "typedi";

import { TodoItemMem } from "../../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { CreateMemRepo } from "../../../../repos/impls/mem/abstrs/create/create_mem_repo";
import { TodoItemMemRepoImpl } from "../../../../repos/impls/mem/impls/todo-item/impls/todo_item_mem.repo.impl";
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

  public async handleLogic(
    input: CreateTodoItemInputDto
  ): Promise<CreateTodoItemOutputDto> {
    const createdItem = await this._repoCreate.create({ ...input });
    const outputDto: CreateTodoItemOutputDto = { ...createdItem };
    return outputDto;
  }
}
