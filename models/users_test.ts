import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { User } from "./users.ts";

Deno.test("Check create user", function (): void {
  const id = 1;
  const name = "Alexis";
  const user = new User(id, name);

  assertEquals(id, user.id);
  assertEquals(name, user.name);
});
