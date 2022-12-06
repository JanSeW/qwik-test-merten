export default function Headline({ className, content, type, cmsKey }) {
  let htmlString = `<${type} data-attr-key="${cmsKey}">${content}</${type}>`;
  return (
    <div class={className} dangerouslySetInnerHTML={{ __html: htmlString }} />
  );
}
