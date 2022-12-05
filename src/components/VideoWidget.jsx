export default function VideoWidgte({ data }) {
  return <></>;
  return (
    <main class="main-padding py-10 bg-lightGray font-secondary-regular">
      <data.headline_0.type class="font-sec-regular  font-bold text-darkBlue subline-text">
        {data.headline_0.content}
      </data.headline_0.type>

      <div class="flex flex-col md:flex-row gap-x-5 justify-center">
        <div class="w-full md:w-1/2 flex flex-col">
          <p class="text-darkBlue subline-text  font-thin my-3">
            {data.textfield_0.content}
          </p>

          <iframe
            style={{ height: "100%", width: "100%" }}
            src={
              "https://www.youtube.com/embed/" + data.video_0.src.split("/")[3]
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div class="pt-[10%] md:pt-[30%]"></div>
        <div class="w-full md:w-1/2 flex flex-col">
          <p class="text-darkBlue subline-text  font-thin my-3">
            {data.textfield_1.content}
          </p>

          <iframe
            style={{ height: "100%", width: "100%" }}
            src={
              "https://www.youtube.com/embed/" + data.video_1.src.split("/")[3]
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </main>
  );
}
