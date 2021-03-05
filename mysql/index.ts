// Pending mariaDB
import { Client } from "https://deno.land/x/mysql/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();
export const client = await new Client().connect({
  hostname: env.MYSQL_HOST,
  username: env.MYSQL_USER,
  db: env.MYSQL_DB,
  poolSize: 3, // connection limit
  password: env.MYSQL_PASSWORD,
});