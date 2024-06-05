import { CreateInMemRepo } from "./create/create_in_mem_repo";
import { DeleteInMemRepo } from "./delete/delete_in_mem_repo";
import { GetAllInMemRepo } from "./get/get_all_in_mem_repo";
import { GetByIdInMemRepo } from "./get/get_by_id_in_mem_repo";
import { UpdateInMemRepo } from "./update/update_in_mem_repo";

export interface InMemRepo<T>
  extends CreateInMemRepo<T>,
    GetByIdInMemRepo<T>,
    GetAllInMemRepo<T>,
    UpdateInMemRepo<T>,
    DeleteInMemRepo {}
