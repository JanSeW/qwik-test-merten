export default function Image({ data }) {
  return (
    <main class="w-screen bg-white relative">
      <div class="imageContainer w-full relative bg-white">
        <img
          src={data.image_0.src}
          alt="Merten Immobilien Header"
          fetchpriority="high"
        />
      </div>
    </main>
  );
}
