export default function Input({
  placeholder,
  name,
  value,
  onChange,
  className,
  cmsKey,
}) {
  return (
    <input
      data-attr-key={cmsKey}
      name={name}
      value={value}
      onChange={onChange}
      className={className}
      placeholder={placeholder}
    />
  );
}
