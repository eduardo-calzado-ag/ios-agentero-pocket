import { config } from "https://deno.land/x/dotenv/mod.ts";
import { Application } from "https://deno.land/x/oak/mod.ts";

import { router } from "./routes/index.ts";
import { logger } from "./middleware/logger.ts";

import { parse } from 'https://deno.land/std/flags/mod.ts';

const { args } = Deno;
const { PORT } = config();
const argPort = parse(args).port ?? PORT;


const app = new Application();

app.use(logger);
app.use(router.routes());

console.log(`Server up on port ${argPort}`);

await app.listen({ port: Number(argPort) });
