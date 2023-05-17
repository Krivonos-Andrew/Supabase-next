import Image from "next/image";


export default function Photo({ photo }: any) {
  return (
    <img
      src={`${photo.url}`}
      srcSet={`${photo.url}`}
      width={"100%"}
      loading="lazy"
    />

  );
}
