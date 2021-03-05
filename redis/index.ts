// Pending password
import { connect } from "https://deno.land/x/redis/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();
const redis = await connect({
  hostname: env.REDIS_HOST,
  port: 6379,
});
redis.auth(env.REDIS_PASSWORD);
export default redis;
