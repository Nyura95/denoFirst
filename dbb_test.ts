import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { users } from "./dbb.ts";
import { User } from "./models/users.ts";

Deno.test("test add user", function (): void {
  const user = new User(1, "Alexis");
  users.push(user);
  assertEquals(1, users.length);
});
