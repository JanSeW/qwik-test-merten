import FilledButton from "./FilledButton.jsx";

export default function InhaltKopfbereich({ data }) {
  return (
    <main className="bg-white w-screen main-padding vertical-padding flex md:flex-row flex-col font-sec-regular md:gap-x-10 xl:gap-x-40">
      <div className="flex flex-col w-full md:w-1/2">
        <data.headline_0.type className="text-darkBlue font-thin">
          {data.headline_0.content}...
        </data.headline_0.type>

        <data.headline_1.type className="text-darkBlue head-text underline font-semibold">
          {data.headline_1.content}
        </data.headline_1.type>
        <div
          className="text-darkBlue font-main-regular mt-8 text-[1.2rem]"
          dangerouslySetInnerHTML={data.textarea_0.content}
        ></div>
        <div className="flex flex-row items-center mt-8 gap-x-6">
          <FilledButton
            text={data.button_0.content}
            link={data.button_0.link}
            color="darkBlue"
          />
          <FilledButton
            text={data.button_1.content}
            link={data.button_1.link}
            color="darkBlue"
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 items-center">
        <h3
          className="text-darkBlue flow-text font-bold font-main-regular mt-10 md:mt-0"
          style={{ hyphens: "none" }}
        >
          {data.headline_2.content}
        </h3>
        <div className="flex flex-row flex-wrap mt-10 gap-y-2">
          {[...Array(4)].map((item, key) => (
            <div
              key={key}
              className={`w-[50%] md:w-[45%] flex p-5 flex-col justify-center items-center text-center relative`}
            >
              {(key === 0 || key === 1) && (
                <div className="absolute w-[90%] bottom-0 bg-lightGray h-[2px]"></div>
              )}
              {(key === 0 || key === 2) && (
                <div className="absolute h-[90%] right-0 bg-lightGray w-[2px]"></div>
              )}
              <div className="imageContainer relative w-[50px]">
                {/*  <img
                  src={data["image_" + key].src}
                  alt="media_references"
                  fetchpriority="low"
                  decoding="async"
                  loading="lazy"
                /> */}
              </div>
              <p className="text-darkBlue flow-text font-main-regular mt-5">
                {data["textfield_" + key].content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
