// import { Modal } from "./modal";

import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { photoId: number }) {
  const image = await getImage(props.photoId);

  return <img src={image.url} alt={image.name} className="w-96" />;
}
