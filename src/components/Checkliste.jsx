import FilledButton from "./FilledButton";

export default function Checkliste({ data }) {
  return (
    <div className="main-padding vertical-padding bg-lightGray relative overflow-hidden w-screen">
      <data.headline_0.type className="text-darkBlue head-text underline font-medium mb-12 xl:max-w-[50%]">
        {data.headline_0.content}
      </data.headline_0.type>
      <main className="flex flex-row">
        <div className="w-full lg:w-1/2 pb-[400px] md:pb-0">
          {/* {data.check_list.map((line, key) => (
            <div
              key={key}
              className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5"
            >
              <div className="w-max">
 <AiOutlineCheck className="text-green text-[1.5rem]" />
              </div>
              <p key={key}>{line.text}</p>
            </div>
          ))} */}
          <div className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5">
            <div className="w-max">
              {/*  <AiOutlineCheck className="text-green text-[1.5rem]" />*/}
            </div>
            <p>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5">
            <div className="w-max">
              {/*  <AiOutlineCheck className="text-green text-[1.5rem]" />*/}
            </div>
            <p>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5">
            <div className="w-max">
              {/*  <AiOutlineCheck className="text-green text-[1.5rem]" />*/}
            </div>
            <p>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5">
            <div className="w-max">
              {/*  <AiOutlineCheck className="text-green text-[1.5rem]" />*/}
            </div>
            <p>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5">
            <div className="w-max">
              {/*  <AiOutlineCheck className="text-green text-[1.5rem]" />*/}
            </div>
            <p>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5">
            <div className="w-max">
              {/*  <AiOutlineCheck className="text-green text-[1.5rem]" />*/}
            </div>
            <p>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-5 flow-text font-main-regular text-darkBlue my-5">
            <div className="w-max">
              {/*  <AiOutlineCheck className="text-green text-[1.5rem]" />*/}
            </div>
            <p>Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 Item 1 </p>
          </div>
          <FilledButton
            additionalCSS="mt-5"
            text={data.button_0.content}
            link={data.button_0.link}
            color="darkBlue"
          />
        </div>

        <div
          className="imageContainer absolute w-full md:hidden lg:block lg:w-1/2 c1:w-[45%] c4:w-[40%] c4:right-32 bottom-0
      c5:max-w-[700px] c6:max-w-[750px] c7:max-w-[750px]
      right-0 md:right-16 c5:right-72 c6:right-96 c7:right-[28%]"
          style={{ transformOrigin: "bottom", transform: "scale(0.9)" }}
        >
          <img
            src={data.image_0.src}
            alt="media_references"
            layout="fill"
            objectFit="contain"
            className="image_"
          />
        </div>
      </main>
    </div>
  );
}
