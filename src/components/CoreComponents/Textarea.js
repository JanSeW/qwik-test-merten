export default function Textarea({ content, className, cmsKey }) {
  content =
    content.substr(0, 2) + " data-attr-key=" + cmsKey + " " + content.substr(2);

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  );
}
