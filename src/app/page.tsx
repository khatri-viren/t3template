import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.name),
  });

  return (
    <div className="flex flex-wrap justify-center gap-4 align-middle">
      {images.map((image, index) => (
        <div
          className="my-auto flex w-48 flex-col gap-2"
          key={image.id + `-${index++}`}
        >
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="flex flex-col items-center justify-center gap-4 p-4">
          Please sign in to view images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
