// Pending password
import { connect } from "https://denopkg.com/keroxp/deno-redis/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();
const redis = await connect({
  hostname: env.REDIS_HOST,
  port: 6379,
});
const ok = await redis.set("hoge", "fuga");
const fuga = await redis.get("hoge");
