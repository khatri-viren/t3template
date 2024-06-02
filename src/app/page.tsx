import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.name),
  });

  console.log(images);

  return (
    <main className="">
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
    </main>
  );
}
