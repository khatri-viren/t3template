/* eslint-disable @next/next/no-img-element */
// import { Modal } from "./modal";

import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full  w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l-2 border-white">
        <div className="border-b p-2 text-center text-lg">{image.name}</div>
        <div className="flex flex-col p-2">
          Uploaded By: {uploaderInfo.fullName}
        </div>
        <div className="flex flex-col p-2">
          Created On: {image.createdAt.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
