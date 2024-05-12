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

      expect(created).toEqual({ id: 1, ...input });
    });
  });

  describe("getTodoItemById", () => {
    test("valid input, TodoItem retrieved", async () => {
      const db = new DatabaseInMem();
      const newTodoItem = await db.createTodoItem({
        title: "Existing Todo",
        description: "Existing Description",
      });

      const foundItem = await db.getTodoItemById(newTodoItem.id);

      expect(foundItem).toEqual(newTodoItem);
    });

    test("non-existent id, undefined returned", async () => {
      const db = new DatabaseInMem();
      const nonExistentId = 10;

      const foundItem = await db.getTodoItemById(nonExistentId);

      expect(foundItem).toBeUndefined();
    });
  });

  describe("getAllTodoItems", () => {
    test("available TodoItems, all TodoItems returned", async () => {
      const db = new DatabaseInMem();
      await db.createTodoItem({ title: "Title 1", description: "Des 1" });
      await db.createTodoItem({ title: "Title 2", description: "Des 2" });

      const allItems = await db.getAllTodoItems();

      expect(allItems.length).toBe(2);
      expect(allItems[0]).toHaveProperty("id");
    });
  });

  describe("updateTodoItem", () => {
    test("valid input, TodoItem updated", async () => {
      const db = new DatabaseInMem();
      const createdItem = await db.createTodoItem({
        title: "title before update",
        description: "des before update",
      });
      const input = {
        ...createdItem,
        title: "title after update",
        description: "des after update",
      };

      const updatedItem = await db.updateTodoItem(input);

      expect(updatedItem).toEqual(input);
    });

    // TODO: add test case for non-existent item.
  });

  describe("deleteTodoItem", () => {
    test("valid input, TodoItem deleted", async () => {
      const db = new DatabaseInMem();
      const itemToDelete = await db.createTodoItem({
        title: "Delete",
        description: "Delete",
      });

      await db.deleteTodoItem(itemToDelete.id);

      const allItems = await db.getAllTodoItems();
      expect(allItems.length).toBe(0);

      // TODO: add test case for non-existent item.
    });
  });
});
