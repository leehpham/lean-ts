import { DatabaseInMem } from "../../../../databases/implementations/in-mem/database_in_mem";
import { TodoItemInMem } from "../../../../entities/implementations/in-mem/todo_item_in_mem.entity";

describe("DatabaseInMem", () => {
  describe("createTodoItem", () => {
    test("valid input, new database, TodoItem created", async () => {
      const db = new DatabaseInMem();
      const input: Omit<TodoItemInMem, "id"> = {
        title: "test title",
        description: "test description",
      };

      const created = await db.createTodoItem(input);

      expect(created.id).toBe(1);
      expect(created.title).toBe(input.title);
      expect(created.description).toBe(input.description);
    });
  });
});
