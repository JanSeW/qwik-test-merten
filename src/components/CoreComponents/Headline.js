export default function Headline({ className, content, type, cmsKey }) {
  let htmlString = `<${type} data-attr-key="${cmsKey}">${content}</${type}>`;
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: htmlString }}
    />
  );
}
