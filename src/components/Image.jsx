export default function Image({ data }) {
  return (
    <main class="w-screen bg-white relative h-[361px]">
      <div class="imageContainer w-full relative bg-white">
        <img
          src={data.image_0.src}
          alt="Merten Immobilien Header"
          width={390}
          height={390}
          decoding="async"
          fetchpriority="high"
        />
      </div>
    </main>
  );
}
