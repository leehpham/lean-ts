import { MemModel } from "../../../../infra/persistence/mem/models/memModel.js";
import { ICreateMemRepo } from "./iCreateMemRepo.js";
import { IDeleteAllMemRepo } from "./iDeleteAllMemRepo.js";
import { IDeleteInMemRepo } from "./iDeleteMemRepo.js";
import { IGetAllInMemRepo } from "./iGetAllMemRepo.js";
import { IGetByIdInMemRepo } from "./iGetByIdMemRepo.js";
import { IUpdateInMemRepo } from "./iUpdateMemRepo.js";

export interface IInMemRepo<T extends MemModel>
  extends ICreateMemRepo<T>,
    IGetByIdInMemRepo<T>,
    IGetAllInMemRepo<T>,
    IUpdateInMemRepo<T>,
    IDeleteInMemRepo,
    IDeleteAllMemRepo {}
