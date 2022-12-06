export default function Download({ className, content, src, cmsKey }) {
  return (
    <a
      class={className}
      href={src}
      download
      target={"_blank"}
      rel="noreferrer"
      data-attr-key={cmsKey}
    >
      {content}
    </a>
  );
}
