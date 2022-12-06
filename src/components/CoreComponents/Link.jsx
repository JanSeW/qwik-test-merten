import Link from "next/link";

export default function LinkAmbitive({
  children,
  link,
  target,
  follow,
  internal,
  cmsKey,
}) {
  return internal ? (
    <Link href={link}>
      <a rel={follow} data-attr-key={cmsKey}>
        {children}
      </a>
    </Link>
  ) : (
    <a href={link} target={target} rel={follow} data-attr-key={cmsKey}>
      {children}
    </a>
  );
}
