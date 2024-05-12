import { TodoItemInMem } from "../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { CreateRepo } from "../../../repositories/abstractions/create_repo";
import { TodoItemInMemRepository } from "../../../repositories/implementations/in-mem/todo_item_in_mem.repository";
import { UseCaseTemplate } from "../../abstractions/usecase_template";
import { Validator } from "../../abstractions/validator";
import { CreateTodoItemInputDto } from "./dtos/create_todo_item_input.dto";
import { CreateTodoItemOutputDto } from "./dtos/create_todo_item_output.dto";
import { CreateTodoItemInputValidator } from "./validators/create_todo_item_input_validator";

export class CreateTodoItemUseCase extends UseCaseTemplate<
  CreateTodoItemInputDto,
  CreateTodoItemOutputDto
> {
  protected readonly _inputValidator: Validator<CreateTodoItemInputDto>;
  private readonly _repoCreate: CreateRepo<TodoItemInMem>;

  public constructor(
    inputValidator: Validator<CreateTodoItemInputDto> = new CreateTodoItemInputValidator(),
    repoCreate: CreateRepo<TodoItemInMem> = new TodoItemInMemRepository()
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
