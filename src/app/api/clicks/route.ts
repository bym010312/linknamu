import { getMongoClient } from "@/lib/mongodb";
import { isLinkId, links, type ClickCounts, type LinkId } from "@/lib/links";

type ClickDoc = { _id: LinkId; count: number };

async function getClicksCollection() {
  const client = await getMongoClient();
  return client.db().collection<ClickDoc>("clicks");
}

export async function GET() {
  const clicks = await getClicksCollection();
  const docs = await clicks
    .find({ _id: { $in: links.map((link) => link.id) } })
    .toArray();

  const counts = Object.fromEntries(
    links.map((link) => [link.id, 0]),
  ) as ClickCounts;
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return Response.json(counts);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id: unknown = body?.id;
  if (!isLinkId(id)) {
    return Response.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  const doc = await clicks.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return Response.json({ id, count: doc?.count ?? 1 });
}
