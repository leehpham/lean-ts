import { MemModel } from "../../../../infra/persistence/mem/models/mem_model";
import { ICreateMemRepo } from "./i_create_mem_repo";
import { IDeleteAllMemRepo } from "./i_delete_all_mem_repo";
import { IDeleteInMemRepo } from "./i_delete_mem_repo";
import { IGetAllInMemRepo } from "./i_get_all_mem_repo";
import { IGetByIdInMemRepo } from "./i_get_by_id_mem_repo";
import { IUpdateInMemRepo } from "./i_update_mem_repo";

export interface IInMemRepo<T extends MemModel>
  extends ICreateMemRepo<T>,
    IGetByIdInMemRepo<T>,
    IGetAllInMemRepo<T>,
    IUpdateInMemRepo<T>,
    IDeleteInMemRepo,
    IDeleteAllMemRepo {}
