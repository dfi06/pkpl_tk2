import { createClient } from "redis";

let client = null;

async function getRedisClient() {
  if (client) {
    return client;
  }

  client = createClient({
    url: process.env.REDIS_URL,
  });

  client.on("error", (err) => console.error("redis client error", err));

  await client.connect();

  return client;
}

export async function setTheme(theme) {
  const redisClient = await getRedisClient();
  await redisClient.set("theme", JSON.stringify(theme));
}

export async function getTheme() {
  const redisClient = await getRedisClient();
  const theme = await redisClient.get("theme");
  return theme ? JSON.parse(theme) : null;
}
