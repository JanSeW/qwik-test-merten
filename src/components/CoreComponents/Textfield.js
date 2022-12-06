export default function Textfield({ className, content, cmsKey }) {
  return (
    <p className={className} data-attr-key={cmsKey}>
      {content}
    </p>
  );
}
