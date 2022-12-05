import FilledButton from "./FilledButton";

export default function Bewertungen({ data }) {
  return <></>;
  let list = [];
  const [rating, setRatings] = useState([]);
  const getRatings = async function () {
    const ratings = await fetch("/api/ratings");
    list = await ratings.json();
    list.result.reviews.length = 4;
    setRatings(list.result.reviews);
  };

  useEffect(() => {
    getRatings();
  }, []);
  return (
    <main class="main-padding vertical-padding flex flex-col items-start text-darkBlue bg-white relative font-sec-regular">
      <div class="absolute w-full h-1/4 bottom-0 left-0"></div>
      <p class="text-darkBlue head-text underline font-semibold">
        Google Bewertungen - das sagen unsere Kunden
      </p>
      <p class="text-darkBlue flow-text font-secondary-regular  font-medium my-10 flow-text md:max-w-[50vw]">
        Sie sind mit unserer Dienstleistung als Immobilienmakler zufrieden? Dann
        hinterlassen Sie uns doch gerne eine Bewertung auf Google. Wir freuen
        uns über Ihr Feedback. Vielen Dank, Ihr Team der Ronald Merten
        Immobilien GmbH!
      </p>
      <div class="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-2 gap-14">
        {rating.map((item, key) => (
          <div key={key} class="w-full flex flex-col items-center">
            <div class="p-10 bg-lightGray text-center pb-10 flex-grow relative">
              <div class="imageContainer relative w-[40px] c6:w-[70px] mx-auto -top-3">
                <Image
                  src={
                    "https://import-api.merten-immobilien.de/assets/RMI_Google.svg"
                  }
                  alt="media_references"
                  layout="fill"
                  objectFit="contain"
                  class="image_"
                />
              </div>
              <p class="text-center subline-text font-bold ell-text-1 mb-6">
                {item.author_name}
              </p>
              <div class="flex flex-row items-center w-full justify-center gap-x-5 subline-text text-orange">
                {[...Array(item.rating)].map((i, key) => (
                  <RiStarFill key={key} />
                ))}
              </div>
              <p class="flow-text font-bold  my-5">{item.rating} Sterne</p>
              <p class="flow-text font-main-regular ell-text-7 overflow-hidden mb-5">
                {item.text}
              </p>
              <a
                href={item.author_url}
                target="_blank"
                rel="noreferrer"
                class="font-bold cursor-pointer absolute left-1/2 -translate-x-1/2 bottom-5"
              >
                mehr lesen
              </a>
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
        target={"_blank"}
        rel="noreferrer"
      >
        <FilledButton
          additionalCSS="mt-16 relative z-40 bg-darkBlue"
          text={"Jetzt eine Google Bewertung schreiben"}
          color="darkBlue"
        />
      </a>
    </main>
  );
}
