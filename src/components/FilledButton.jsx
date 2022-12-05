import { Link } from "@builder.io/qwik-city";

export default function FilledButton({
  color,
  text,
  link,
  external,
  additionalCSS,
}) {
  return external ? (
    <a href={link} target={"blank"} rel="noreferrer">
      <button
        type="button"
        class={`${additionalCSS} flow-text font-bold bg-${color} ${
          color === "green" ? "hover:bg-darkBlue" : "hover:bg-green"
        } text-white w-max py-3 px-4 duration-300`}
      >
        {text}
      </button>
    </a>
  ) : link ? (
    <Link href={link}>
      <button
        type="button"
        style={{ backgroundColor: "var(--" + color + ")" }}
        class={`${additionalCSS} flow-text font-bold ${
          color === "green" ? "hover:bg-darkBlue" : "hover:bg-green"
        } text-white w-max py-3 px-4 duration-300`}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      type="button"
      class={`${additionalCSS} flow-text font-bold bg-${color} ${
        color === "green" ? "hover:bg-darkBlue" : "hover:bg-green"
      } text-white w-max py-3 px-4 duration-300`}
    >
      {text}
    </button>
  );
}
