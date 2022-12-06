import Image from "next/image";
import Link from "next/link";

export default function ImageAmbitive({
  src,
  alt,
  link,
  target,
  follow,
  cmsKey,
  priority,
}) {
  return link && link !== "none" ? (
    target === "self" ? (
      <Link href={link}>
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          blurDataURL={`/_next/image?url=` + src + `&w=16&q=1`}
          placeholder="blur"
          className="image_ cursor-pointer"
          data-attr-key={cmsKey}
          priority={priority}
        />
      </Link>
    ) : (
      <a
        href={link}
        rel={"noreferrer"}
        target="_blank"
        className="block imageContainer w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="contain"
          blurDataURL={`/_next/image?url=` + src + `&w=16&q=1`}
          placeholder="blur"
          className="image_ cursor-pointer"
          data-attr-key={cmsKey}
          priority={priority}
        />
      </a>
    )
  ) : (
    <Image
      src={src}
      alt={alt}
      layout="fill"
      objectFit="contain"
      blurDataURL={`/_next/image?url=` + src + `&w=16&q=1`}
      placeholder="blur"
      className="image_"
      data-attr-key={cmsKey}
      priority={priority}
    />
  );
}
