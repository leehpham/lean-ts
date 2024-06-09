import { CreateMemRepo } from "./create/create_mem_repo";
import { DeleteInMemRepo } from "./delete/delete_mem_repo";
import { GetAllInMemRepo } from "./get/get_all_mem_repo";
import { GetByIdInMemRepo } from "./get/get_by_id_mem_repo";
import { UpdateInMemRepo } from "./update/update_mem_repo";

export interface InMemRepo<T>
  extends CreateMemRepo<T>,
    GetByIdInMemRepo<T>,
    GetAllInMemRepo<T>,
    UpdateInMemRepo<T>,
    DeleteInMemRepo {}
