import { Router } from "https://deno.land/x/oak/mod.ts";

import { addUsers, getUsers } from "./handlers/users.ts";

const router = new Router();
router.get("/users", getUsers);
router
  .post("/users", addUsers);

export default router;
