import { config } from "https://deno.land/x/dotenv/mod.ts";
import log from "./middlewares/log.ts";


console.log("Redis");
import redis from "./redis/index.ts";
const ok = await redis.set("hoge", "fuga");
console.log(await redis.get("hoge"));

import {client} from "./mysql/index.ts";
console.log("Mysql");
console.log(await client.query(`SELECT * FROM tbl_access_token`));

import { Application } from "https://deno.land/x/oak/mod.ts";

import router from "./router.ts";
const app = new Application();
app.use(log);
app.use(router.routes());
const port = config().HTTP_PORT;

console.log(`Listening on ${port}...`);
await app.listen(`localhost:${port}`);
