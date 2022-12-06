export default function Dropdown({ options, className, cmsKey }) {
  return (
    options && (
      <select class={className} data-attr-key={cmsKey}>
        {options.map((opt, key) => (
          <option key={opt.key}>{opt.value}</option>
        ))}
      </select>
    )
  );
}
