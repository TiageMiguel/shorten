import { Elysia } from "elysia";

import { healthRoutes } from "./health";
import { shortenerRoutes } from "./shortener";

export const routes = new Elysia({ prefix: "/api" })
  .use(healthRoutes)
  .use(shortenerRoutes);
