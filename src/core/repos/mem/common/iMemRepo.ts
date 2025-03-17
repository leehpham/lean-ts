import { MemModel } from "../../../../infra/persistence/mem/models/memModel";
import { ICreateMemRepo } from "./iCreateMemRepo";
import { IDeleteAllMemRepo } from "./iDeleteAllMemRepo";
import { IDeleteInMemRepo } from "./iDeleteMemRepo";
import { IGetAllInMemRepo } from "./iGetAllMemRepo";
import { IGetByIdInMemRepo } from "./iGetByIdMemRepo";
import { IUpdateInMemRepo } from "./iUpdateMemRepo";

export interface IInMemRepo<T extends MemModel>
  extends ICreateMemRepo<T>,
    IGetByIdInMemRepo<T>,
    IGetAllInMemRepo<T>,
    IUpdateInMemRepo<T>,
    IDeleteInMemRepo,
    IDeleteAllMemRepo {}
