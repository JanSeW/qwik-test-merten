import { component$ } from "@builder.io/qwik";

export default component$(({ data }) => {
  return (
    <main class="w-screen bg-white relative h-[361px] md:h-full">
      <img
        src={data.image_0.src}
        alt="Merten Immobilien Header"
        width={390}
        decoding="async"
        fetchpriority="high"
        class={"header-image-mobile"}
      />
      <img
        src={data.image_1.src}
        alt="Merten Immobilien Header"
        width="100%"
        decoding="async"
        fetchpriority="high"
        class={"header-image"}
      />
    </main>
  );
});
