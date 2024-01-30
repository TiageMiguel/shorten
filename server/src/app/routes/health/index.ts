import Os from "os";
import { Elysia } from "elysia";

async function GET() {
  return {
    upTime: process.uptime(),
    responseTine: process.hrtime,
    timestamp: Date.now(),
    memoryUsage: Os.totalmem() - Os.freemem(),
    memoryTotal: Os.totalmem(),
    memoryFree: Os.freemem(),
  };
}

export const healthRoutes = new Elysia({ prefix: "/health" }).get("/", GET);
