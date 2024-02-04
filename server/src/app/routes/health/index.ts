import Os from "os";
import { Elysia, t } from "elysia";

async function formatBytes(bytes: number) {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    (await parseFloat((bytes / Math.pow(k, i)).toFixed(2))) + " " + sizes[i]
  );
}

async function GET() {
  const memoryUsage = await formatBytes(Os.totalmem() - Os.freemem());
  const memoryTotal = await formatBytes(Os.totalmem());
  const memoryFree = await formatBytes(Os.freemem());

  return {
    upTime: process.uptime(),
    responseTine: process.hrtime,
    timestamp: Date.now(),
    memoryUsage,
    memoryTotal,
    memoryFree,
  };
}

export const healthRoutes = new Elysia({ prefix: "/health" }).get("/", GET);
