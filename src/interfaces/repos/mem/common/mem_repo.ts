import { MemEntity } from "../../../../entities/impls/mem/mem.entity";
import { CreateMemRepo } from "./create_mem_repo";
import { DeleteAllMemRepo } from "./delete_all_mem_repo";
import { DeleteInMemRepo } from "./delete_mem_repo";
import { GetAllInMemRepo } from "./get_all_mem_repo";
import { GetByIdInMemRepo } from "./get_by_id_mem_repo";
import { UpdateInMemRepo } from "./update_mem_repo";

export interface InMemRepo<T extends MemEntity>
  extends CreateMemRepo<T>,
    GetByIdInMemRepo<T>,
    GetAllInMemRepo<T>,
    UpdateInMemRepo<T>,
    DeleteInMemRepo,
    DeleteAllMemRepo {}
