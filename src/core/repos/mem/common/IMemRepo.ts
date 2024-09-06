import { MemModel } from "../../../../infra/persistence/mem/models/MemModel";
import { ICreateMemRepo } from "./ICreateMemRepo";
import { IDeleteAllMemRepo } from "./IDeleteAllMemRepo";
import { IDeleteInMemRepo } from "./IDeleteMemRepo";
import { IGetAllInMemRepo } from "./IGetAllMemRepo";
import { IGetByIdInMemRepo } from "./IGetByIdMemRepo";
import { IUpdateInMemRepo } from "./IUpdateMemRepo";

export interface IInMemRepo<T extends MemModel>
  extends ICreateMemRepo<T>,
    IGetByIdInMemRepo<T>,
    IGetAllInMemRepo<T>,
    IUpdateInMemRepo<T>,
    IDeleteInMemRepo,
    IDeleteAllMemRepo {}
