import { Context, Elysia } from "elysia";

import { PrismaClient } from "@prisma/client";

import { nanoid } from "nanoid";

const db = new PrismaClient();

interface ContextParams {
  params: {
    slug: string;
  };
}

async function GET(context: Context<ContextParams>) {
  const { params } = context;

  if (
    typeof params.slug === undefined ||
    params.slug === null ||
    params.slug.length === 0 ||
    params.slug.length <= 7
  ) {
    return {
      status: "errorsadasdsa",
    };
  }

  console.log(params.slug);

  try {
    const result = await db.shorterLink.findUnique({
      where: {
        id: params.slug,
      },
    });

    return {
      result,
    };
  } catch (error) {
    return {
      error,
      status: "Error",
    };
  }
}

async function POST(context: Context) {
  let id = nanoid(7);

  const x = await db.shorterLink.create({
    data: {
      id: String(id),
      link: context.body.url,
    },
  });

  console.log(x);

  return {
    status: "POST",
    id,
    link: context.body.url,
  };
}

async function PUT(context: Context) {
  return {
    status: "PUT",
  };
}

async function DELETE(context: Context) {}

export const shortenerRoutes = new Elysia({ prefix: "/shortener" })
  .get("/:slug", GET)
  .post("/", POST)
  .put("/", PUT)
  .delete("/", DELETE);
