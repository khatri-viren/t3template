import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/c809593f-abd7-4eb9-ab5c-999a073d3a40-ckzfih.jpeg",
  "https://utfs.io/f/015690cd-ce5d-4109-ac41-ce7e2958abaf-7wy18t.jpeg",
  "https://utfs.io/f/383020e9-66f4-4d5c-8d04-a0b7ba8c9b5e-z1z493.jpeg",
  "https://utfs.io/f/6f217f18-898c-4d82-a50f-5896691b5fb8-e9hmc1.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div className="w-48" key={post.id}>
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div className="w-48" key={image.id + `-${index++}`}>
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
