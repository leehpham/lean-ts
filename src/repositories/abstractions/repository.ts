import { RepoCreate } from "./repo_create";
import { RepoDelete } from "./repo_delete";
import { RepoGetAll } from "./repo_get_all";
import { RepoGetById } from "./repo_get_by_id";
import { RepoUpdate } from "./repo_update";

export interface Repository<T>
  extends RepoCreate<T>,
    RepoGetById<T>,
    RepoGetAll<T>,
    RepoUpdate<T>,
    RepoDelete {}
