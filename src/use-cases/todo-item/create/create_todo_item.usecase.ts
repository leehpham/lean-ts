import { TodoItemInMem } from "../../../entities/implementations/in-mem/todo_item_in_mem.entity";
import { Repository } from "../../../repositories/abstractions/repository";
import { TodoItemInMemRepository } from "../../../repositories/implementations/in-mem/todo_item_in_mem.repository";
import { UseCase } from "../../abstractions/usecase";
import { UseCaseTemplate } from "../../abstractions/usecase_template";
import { Validator } from "../../abstractions/validator";
import { CreateTodoItemInputDto } from "./dtos/create_todo_item_input.dto";
import { CreateTodoItemOutputDto } from "./dtos/create_todo_item_output.dto";
import { CreateTodoItemInputValidator } from "./validators/create_todo_item_input_validator";

export class CreateTodoItemUseCase
  extends UseCaseTemplate<CreateTodoItemInputDto, CreateTodoItemOutputDto>
  implements UseCase<CreateTodoItemInputDto, CreateTodoItemOutputDto>
{
  protected readonly _inputValidator: Validator<CreateTodoItemInputDto>;
  private readonly _repo: Repository<TodoItemInMem>;

  public constructor(
    inputValidator: Validator<CreateTodoItemInputDto> = new CreateTodoItemInputValidator(),
    repo: Repository<TodoItemInMem> = new TodoItemInMemRepository()
  ) {
    super();
    this._inputValidator = inputValidator;
    this._repo = repo;
  }

  public async handleLogic(
    input: CreateTodoItemInputDto
  ): Promise<CreateTodoItemOutputDto> {
    const createdItem = await this._repo.create({ ...input });
    const outputDto: CreateTodoItemOutputDto = { ...createdItem };
    return outputDto;
  }
}
