import { TodoItemInMem } from "../../../../entities/impls/in-mem/todo_item_in_mem.entity";
import { CreateInMemRepo } from "../../../../repos/impls/in-mem/abstrs/create/create_in_mem_repo";
import { TodoItemInMemRepoImpl } from "../../../../repos/impls/in-mem/impls/todo-item/impls/todo_item_in_mem.repo.impl";
import { InputVldtr } from "../../../abstrs/input_vldtr";
import { UseCaseTemplate } from "../../../abstrs/usecase_template";
import { CreateTodoItemInputDto } from "./dtos/input.dto";
import { CreateTodoItemOutputDto } from "./dtos/output.dto";
import { CreateTodoItemInputValidator } from "./vldtrs/input_vldtr";

export class CreateTodoItemUseCase extends UseCaseTemplate<
  CreateTodoItemInputDto,
  CreateTodoItemOutputDto
> {
  protected readonly _inputValidator: InputVldtr<CreateTodoItemInputDto>;
  private readonly _repoCreate: CreateInMemRepo<TodoItemInMem>;

  public constructor(
    inputValidator: InputVldtr<CreateTodoItemInputDto> = new CreateTodoItemInputValidator(),
    repoCreate: CreateInMemRepo<TodoItemInMem> = new TodoItemInMemRepoImpl()
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
