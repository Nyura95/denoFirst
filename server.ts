import { config } from "https://deno.land/x/dotenv/mod.ts";
import log from "./middlewares/log.ts";

import router from "./router.ts";

import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use(log);
app.use(router.routes());
const port = config().HTTP_PORT;
console.log(`Listening on ${port}...`);
await app.listen(`localhost:${port}`);
