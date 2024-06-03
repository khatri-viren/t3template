/* eslint-disable @next/next/no-img-element */
// import { Modal } from "./modal";

import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return (
    <div className="flex h-full  w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border-l-2 border-white ">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
