import Link from "next/link";

export default function Button({
  className,
  content,
  link,
  target,
  follow,
  cmsKey,
}) {
  return link && target === "self" ? (
    <Link href={link}>
      <button
        className={className}
        rel={follow}
        target={target}
        data-attr-key={cmsKey}
      >
        {content}
      </button>
    </Link>
  ) : (link && target === "_blank") || (link && target === "blank") ? (
    <a href={link} target="_blank" rel={"noreferrer"}>
      <button data-attr-key={cmsKey} className={className}>
        {content}
      </button>
    </a>
  ) : (
    <button data-attr-key={cmsKey} className={className}>
      {content}
    </button>
  );
}
