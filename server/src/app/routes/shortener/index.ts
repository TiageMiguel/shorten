import { Context, Elysia, t } from "elysia";

import { PrismaClient } from "@prisma/client";

import { nanoid } from "nanoid";

const db = new PrismaClient();

async function GET_ALL() {
  try {
    const results = await db.shorterLink.findMany();

    return {
      ...results,
    };
  } catch (error) {
    return {
      status: "Error",
    };
  }
}

interface GetContextParams {
  params: {
    slug: string;
  };
}

async function GET(context: Context<GetContextParams>) {
  const { params } = context;

  if (
    typeof params.slug === undefined ||
    params.slug === null ||
    params.slug.length === 0 ||
    params.slug.length < 7
  ) {
    return {
      error: "The provided slug is not valid!",
    };
  }

  try {
    const result = await db.shorterLink.findUnique({
      where: {
        id: params.slug,
      },
    });

    return {
      ...result,
    };
  } catch (error) {
    return {
      error,
      status: "Error",
    };
  }
}

interface PostContextParams {
  body: {
    url: string;
  };
}

async function POST(context: Context<PostContextParams>) {
  const body = await JSON.parse(context.body);

  let id = nanoid(7);

  const x = await db.shorterLink.create({
    data: {
      id: String(id),
      url: body.url,
    },
  });

  return {
    id,
    url: body.url,
  };
}

interface PutContextParams {
  body: {
    id: string;
    url: string;
  };
}

async function PUT(context: Context<PutContextParams>) {
  const { id, url } = await JSON.parse(context.body);

  try {
    const updated = await db.shorterLink.update({
      where: {
        id,
      },
      data: {
        url,
      },
    });

    return {
      ...updated,
    };
  } catch (error) {
    return {
      status: "Error",
    };
  }

  return {
    status: "PUT",
  };
}

interface DeleteContextParams {
  body: {
    id: string;
  };
}

async function DELETE(context: Context<DeleteContextParams>) {
  const { id } = await JSON.parse(context.body);

  if (id === null) {
    return {
      error: "A Slug needs to be provided!",
    };
  }

  try {
    const deleted = db.shorterLink.delete({
      where: {
        id,
      },
    });

    return {
      deleted: true,
    };
  } catch (error) {
    return {
      status: "Error",
    };
  }
}

export const shortenerRoutes = new Elysia({ prefix: "/shortener" })
  .get("/all", GET_ALL)
  .get("/:slug", GET, {
    params: t.Object({
      slug: t.String(),
    }),
  })
  .post("/", POST, {
    body: t.Object({
      url: t.String(),
    }),
  })
  .put("/", PUT, {
    body: t.Object({
      id: t.String(),
      url: t.String(),
    }),
  })
  .delete("/", DELETE, {
    body: t.Object({
      id: t.String(),
    }),
  });
