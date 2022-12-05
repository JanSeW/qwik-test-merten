export default function Image({ data }) {
  return (
    <main className="w-screen bg-white relative">
      <div className="imageContainer w-full relative bg-white">
        <img
          src={true ? data.image_0.src : data.image_1.src}
          alt="media_references"
        />
      </div>
    </main>
  );
}
