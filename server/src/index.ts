import { Elysia } from "elysia";

import { app } from "./app";

const server = new Elysia();

server.use(app);

server.listen({ port: process.env.PORT }, ({ hostname, port }) => {
  const url = process.env.NODE_ENV === "production" ? "https" : "http";

  console.log(`🦊 Elysia is running at ${url}://${hostname}:${port}`);
});
