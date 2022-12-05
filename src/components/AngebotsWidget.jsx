import SquareIcon from "./SVG/SquareIcon.jsx";
import PlaceIcon from "./SVG/PlaceIcon.jsx";
import BedIcon from "./SVG/BedIcon.jsx";
import { flowfactParser } from "../utils/flowfactParser";

export default function AngebotsWidget({ data, pos, small }) {
  //const router = useRouter();
  return <></>;
  const [activeSection, setSection] = useState(false);
  const [activeKey, setKey] = useState(0);
  const [render, setRender] = useState(false);
  const [estateList, setEstates] = useState([]);

  const handleMouseMove = function (event) {
    setRender(true);
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("touchstart", handleMouseMove);
  };

  useEffect(() => {
    pos === 0 && setRender(true);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleMouseMove);
    getRealEstates();
  }, []);

  useEffect(() => {
    let linkCat = router.query.c;
    switch (linkCat) {
      case "1":
        setKey(1);
        setSection("MIETE_PACHT");
        break;
      case "2":
        setKey(2);
        setSection("KAUF");
        break;
      case "3":
        setKey(3);
        setSection("Besonderes Angebot");
        break;
    }
  }, [router]);

  const getRealEstates = async () => {
    const estates = await fetch("/api/getRealEstates");
    let estatesList = await estates.json();
    const flowfactD = flowfactParser(estatesList);
    if (small) flowfactD.arrayData.length = 3;
    setEstates([...flowfactD.arrayData]);
  };

  function slugify(string) {
    const a =
      "àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìıİłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;";
    const b =
      "aaaaaaaaaacccddeeeeeeeegghiiiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------";
    const p = new RegExp(a.split("").join("|"), "g");

    return string
      .toString()
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(p, (c) => b.charAt(a.indexOf(c))) // Replace special characters
      .replace(/&/g, "-and-") // Replace & with 'and'
      .replace(/[^\w\-]+/g, "") // Remove all non-word characters
      .replace(/\-\-+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  }

  return (
    render && (
      <main class="main-padding vertical-padding bg-lightGray flex flex-col items-center justify-center font-sec-regular">
        {data.headline_variant ? (
          <data.headline_variant class="text-darkBlue head-text underline font-semibold">
            {data.headline}
          </data.headline_variant>
        ) : (
          <p class="text-darkBlue head-text  font-semibold">{data.headline}</p>
        )}
        <div class="flex flex-col justify-center md:flex-row mt-[2rem] md:mt-[3rem] w-full gap-x-[1px] gap-y-[2px]">
          {[...Array(4)].map((tab, key) => (
            <button
              class={`${activeKey === key ? "bg-white" : "bg-gray"} ${
                key === 0
                  ? "rounded-t-lg md:rounded-t-none md:rounded-tl-lg"
                  : key === 3 &&
                    "rounded-b-lg md:rounded-b-none md:rounded-tr-lg"
              } text-darkBlue font-bold flow-text px-6 py-3 duration-300 hover:bg-white`}
              key={key}
              onClick={() => {
                setKey(key);
                if (key === 0) {
                  setSection(false);
                } else if (key === 1) {
                  setSection("MIETE_PACHT");
                } else if (key === 2) {
                  setSection("KAUF");
                } else {
                  setSection("Besonderes Angebot");
                }
              }}
            >
              {data["textfield_" + key].content}
            </button>
          ))}
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 mt-11 font-sec-regular">
          {estateList.map(
            (object, key) =>
              !object.refObject &&
              (activeSection === object.type || !activeSection) && (
                <div
                  key={key}
                  class={`${
                    small ? "w-full bg-white p-2" : "w-full"
                  } cursor-pointer hover:-translate-y-1 duration-300 offer-detail`}
                >
                  <a
                    href={"/expose/" + object.id + "/" + slugify(object.title)}
                  >
                    <div class="pt-[56.25%] bg-cover bg-center relative w-full overflow-hidden">
                      {object.image ? (
                        <div class="imageContainer absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                          <Image
                            src={object.image}
                            alt="media_references"
                            layout="fill"
                            objectFit="contain"
                            class="image_"
                          />
                        </div>
                      ) : (
                        <div class="imageContainer absolute w-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                          <Image
                            src={
                              "https://import-api.merten-immobilien.de/assets/Platzhalter.webp"
                            }
                            alt="media_references"
                            layout="fill"
                            objectFit="contain"
                            class="image_"
                          />
                        </div>
                      )}

                      <div
                        class={`absolute px-4 top-2.5 left-0 text-white font-sec-regular text-[12px] py-1 rounded-r-md
              ${
                object.type === "KAUF"
                  ? "bg-orange"
                  : object.type === "MIETE_PACHT"
                  ? "bg-green"
                  : "bg-lightBlue"
              } 
              `}
                      >
                        <p>
                          {object.type === "KAUF"
                            ? "Verkauf"
                            : object.type === "MIETE_PACHT"
                            ? "Vermietung"
                            : "Besonderes Angebot"}
                        </p>
                      </div>
                    </div>
                    <div class="w-full p-7 bg-white flex flex-col gap-y-3">
                      <p
                        class="ell-text-2  text-darkBlue font-bold flow-text h-12 c6:h-16"
                        style={{ lineHeight: "1.4rem" }}
                      >
                        {object.title}
                      </p>
                      <div class="flex flex-row items-center">
                        <FaMapMarkerAlt class="text-green" />
                        <span class="ml-2  text-black font-medium flow-text">
                          {object.address}
                        </span>
                      </div>
                      <div class="flex flex-row items-center gap-x-1">
                        {/* Fläche Wohnraum */}
                        {object.living_space && (
                          <>
                            <SquareIcon color="green" />
                            <span
                              class="mx-2 whitespace-nowrap font-sec-regular text-darkBlue font-bold font-regular flow-text
                                       border-r border-lightGray pr-2"
                            >
                              {object.living_space} m²
                            </span>
                          </>
                        )}
                        {/* Fläche Grundstück */}
                        {object.type === "KAUF" && object.land && (
                          <>
                            <PlaceIcon color="green" />
                            <span
                              class="mx-2 font-sec-regular text-darkBlue font-bold font-regular flow-text
                                       border-r border-lightGray pr-2"
                            >
                              {object.land} m²
                            </span>
                          </>
                        )}
                        {/* Fläche Nutzfläche */}
                        {object.square_use && (
                          <>
                            <SquareIcon color="green" />
                            <span
                              class="mx-2 whitespace-nowrap font-sec-regular text-darkBlue font-bold font-regular flow-text
                                       border-r border-lightGray pr-2"
                            >
                              {object.square_use} m²
                            </span>
                          </>
                        )}
                        {/* Raumanzahl */}
                        {object.rooms && (
                          <>
                            <BedIcon color="green" />
                            <span class="mx-2 pr-2 whitespace-nowrap border-r border-lightGray font-sec-regular text-darkBlue font-bold font-regular flow-text">
                              {object.rooms} Zi.
                            </span>
                          </>
                        )}
                        {/* Preis */}
                        <span
                          class="font-sec-regular text-darkBlue font-bold font-regular flow-text 
                                    border-lightGray"
                        >
                          {object.costs && object.costs + "€"}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              )
          )}
        </div>
        {/*  <div class="flex flex-row justify-center items-center w-full mt-8 gap-x-5">
          <PageIcon />
          <PageIcon additionalCSS="scale-[-1]" />
        </div> */}
      </main>
    )
  );
}
