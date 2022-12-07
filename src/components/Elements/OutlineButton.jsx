import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(({ link, color, hover, text }) => {
  return (
    <Link href={link}>
      <button
        class={`text-${color} hover:text-${hover} hover:border-${hover} border w-max py-1 px-4 duration-300`}
      >
        {text}
      </button>
    </Link>
  );
});
