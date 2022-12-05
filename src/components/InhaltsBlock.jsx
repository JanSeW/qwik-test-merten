import { Link } from "@builder.io/qwik-city";
import FilledButton from "./FilledButton";

export default function InhaltsBlock({ data }) {
  return (
    <main className="main-padding vertical-padding flex flex-col md:flex-row flex-wrap justify-between bg-white overflow-hidden">
      <div className="w-full md:w-[47%] font-sec-regular flex flex-col justify-between">
        <div>
          {data.headline_0.content && (
            <>
              <data.headline_0.type className="text-darkBlue subline-text underline font-semibold">
                {data.headline_0.content}
              </data.headline_0.type>
              <div
                className="font-main-regular mt-8 text-darkBlue flow-text"
                dangerouslySetInnerHTML={data.textarea_0.content}
              ></div>
              {data.button_0.content && (
                <FilledButton
                  additionalCSS="mt-5"
                  text={data.button_0.content}
                  link={data.button_0.link}
                  color="darkBlue"
                />
              )}
            </>
          )}
        </div>
        <div>
          {data.headline_1.content && data.headline_0.content && (
            <data.headline_1.type
              className={`text-darkBlue subline-text underline font-semibold ${
                data.headline_0.content && "mt-10"
              }`}
            >
              {data.headline_1.content}
            </data.headline_1.type>
          )}
          <div
            className={`font-main-regular flow-text ${
              data.headline_1.content && "mt-8"
            } text-darkBlue`}
            dangerouslySetInnerHTML={data.textarea_1.content}
          ></div>
          {data.button_1.content && (
            <FilledButton
              additionalCSS="mt-5"
              text={data.button_1.content}
              link={data.button_1.link}
              color="darkBlue"
            />
          )}
        </div>
      </div>
      <div className="w-full md:w-[47%] font-sec-regular flex flex-col mt-10  md:mt-0">
        <data.headline_2.type className="text-darkBlue subline-text underline font-semibold">
          {data.headline_2.content}
        </data.headline_2.type>

        <div
          className="font-main-regular flow-text mt-8 text-darkBlue"
          dangerouslySetInnerHTML={data.textarea_2.content}
        ></div>
        {data.button_2.content && (
          <FilledButton
            additionalCSS="mt-5"
            text={data.button_2.content}
            link={data.button_2.link}
            color="darkBlue"
          />
        )}
        {true && (
          <div className="w-full mt-24 pt-[56.25%] relative z-10 ">
            <div className="absolute left-5 top-0 z-20 flex flex-col">
              <p className="font-main-regular subline-text font-thin text-darkBlue scale-75 origin-left lg:scale-100">
                {data.person === "Beide"
                  ? "Ihre Anprechpartner"
                  : "Ihr Anprechpartner"}
              </p>
              <p className="text-darkBlue subline-text underline font-semibold scale-75 origin-left lg:scale-100">
                {data.person === "Ronald"
                  ? "Ronald Merten"
                  : data.person === "Elke"
                  ? "Elke Ringleb"
                  : "Elke Ringleb & Ronald Merten"}
              </p>
              <div className="flex flex-col gap-y-1.5 mt-3 text-[0.7rem] xl:text-[0.9375rem] scale-75 origin-left lg:scale-100 relative -top-6 lg:top-0">
                <div className="flex flex-row items-center gap-x-1">
                  {/*    <FaMapMarkerAlt className="text-green" /> */}
                  <p className="font-main-regular flow-text font-thin text-darkBlue">
                    Am Hopfenberg 5, 99096 Erfurt
                  </p>
                </div>
                <div className="flex flex-row items-center gap-x-1">
                  {/*   <FaEnvelope className="text-green" /> */}
                  <a
                    href={
                      data.person === "Ronald"
                        ? "mailto:merten@merten-immobilien.de"
                        : data.person === "Elke"
                        ? "mailto:ringleb@merten-immobilien.de"
                        : "mailto:info@merten-immobilien.de"
                    }
                    className="font-main-regular flow-text  font-bold text-darkBlue"
                  >
                    {data.person === "Ronald"
                      ? " merten@merten-immobilien.de"
                      : data.person === "Elke"
                      ? " ringleb@merten-immobilien.de"
                      : " info@merten-immobilien.de"}
                  </a>
                </div>
                <div className="flex flex-row items-center gap-x-1">
                  {/*   <FaPhoneAlt className="text-green" /> */}
                  <a
                    href={
                      data.person === "Ronald"
                        ? "tel:0361-3477013"
                        : data.person === "Elke"
                        ? "tel:0361-3477010"
                        : "tel:0361-347700"
                    }
                    className="font-main-regular font-bold flow-text text-darkBlue"
                  >
                    {data.person === "Ronald"
                      ? "0361-34770-13"
                      : data.person === "Elke"
                      ? "0361-34770-10"
                      : "0361-34770-0"}
                  </a>
                </div>
                <Link href={"/kontakt"}>
                  <button
                    className={`text-[0.7rem] font-bold flow-text bg-green text-white w-max py-2 mt-2 px-4`}
                  >
                    Jetzt - Kontakt aufnehmen
                  </button>
                </Link>
              </div>
            </div>
            {data.image_0 && (
              <div className="imageContainer absolute w-full scale-125 md:scale-100  c7:w-[80%] c7:left-[40%] c7:top-[45%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <img
                  src={
                    data.person === "Ronald"
                      ? "https://import-api.merten-immobilien.de/assets/kontaktbild_ronald_merten.webp"
                      : data.person === "Elke"
                      ? "https://import-api.merten-immobilien.de/assets/kontaktbild_elke_ringleb.webp"
                      : "https://import-api.merten-immobilien.de/assets/kontaktbild_merten_immobilien_team.webp"
                  }
                  alt="media_references"
                  fetchpriority="low"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
