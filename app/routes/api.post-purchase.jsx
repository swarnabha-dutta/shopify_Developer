import prisma from "../db.server";

// POST → save post-purchase message
export const action = async ({ request }) => {
  const body = await request.json();
  const { shop, message } = body;

  if (!shop || !message) {
    return new Response(
      JSON.stringify({ error: "Missing fields" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const saved = await prisma.postPurchaseMessage.create({
    data: { shop, message },
  });

  return new Response(
    JSON.stringify(saved),
    {
      status: 201,
      headers: { "Content-Type": "application/json" },
    }
  );
};

// GET → fetch message
export const loader = async ({ request }) => {
  const url = new URL(request.url);
  const shop = url.searchParams.get("shop");

  if (!shop) {
    return new Response(
      JSON.stringify({ error: "Shop required" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  const data = await prisma.postPurchaseMessage.findFirst({
    where: { shop },
    orderBy: { createdAt: "desc" },
  });

  return new Response(
    JSON.stringify(data),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
};
