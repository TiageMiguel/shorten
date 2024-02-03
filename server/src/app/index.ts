import { Elysia } from "elysia";
import { swagger } from "@elysiajs/swagger";
import { cors } from "@elysiajs/cors";

import { routes } from "./routes";

export const app = new Elysia()
  .use(swagger())
  .use(cors({ origin: true, methods: "*" }))
  .use(routes);
