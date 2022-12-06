export default function Textfield({ className, content, cmsKey }) {
  return (
    <p class={className} data-attr-key={cmsKey}>
      {content}
    </p>
  );
}
