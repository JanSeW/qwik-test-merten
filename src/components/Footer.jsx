import { Link } from "@builder.io/qwik-city";

export default function Footer({ data, company }) {
  console.log(data, company);
  return (
    <footer>
      <div className="py-10 border-t-2 border-lightGray bg-white flex flex-col md:flex-row w-screen main-padding font-sec-regular gap-x-16">
        <div className="w-full md:w-1/2">
          <p className="text-darkBlue subline-text underline font-semibold mb-12">
            Zertifikate und Gütesiegel
          </p>
          <div className="flex flex-row gap-x-8 items-start">
            <div className="imageContainer relative w-[70px]">
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/ivd_2_svg.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </div>
            <div className="imageContainer relative w-[100px]">
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/ivd_logo.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </div>
            <div className="imageContainer relative w-[100px]">
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/csm_logo.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </div>
            <div className="imageContainer relative w-[100px]">
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/csm_logo_1.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </div>
            <a
              href="https://www.werkenntdenbesten.de/e/27517231/immobilienmakler/erfurt/ronald-merten-immobilien-gmbh-immobilienmakler-bewertungen.html"
              target={"_blank"}
              rel="noreferrer"
              className="imageContainer relative w-[70px]"
            >
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/den-besten.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-darkBlue subline-text underline font-semibold mt-8 md:mt-0 mb-16">
            Folgen Sie uns auf den sozialen Netzwerken
          </p>
          <div className="flex flex-row flex-grow gap-x-5 items-center">
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.facebook.com/mertenimmobilien/"
              className="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
            >
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/RMI_Facebook.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
              className="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
            >
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/RMI_Google.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.instagram.com/mertenimmobilien/"
              className="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
            >
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/RMI_Instagram.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </a>
            <a
              target={"_blank"}
              rel="noreferrer"
              href="https://www.youtube.com/channel/UC6D6pkXepG2Pc0iZYKhCd1A/discussion"
              className="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
            >
              <Image
                src={
                  "https://import-api.merten-immobilien.de/assets/RMI_YouTube.svg"
                }
                alt="media_references"
                layout="fill"
                objectFit="contain"
                className="image_"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full main-padding pt-12 pb-10 xl:pb-16 bg-darkBlue grid grid-cols-1 md:grid-cols-2 c1:grid-cols-4 text-darkGray flow-text">
        <div className="">
          <p className="underline font-semibold mb-6">Hier finden Sie uns</p>
          <a
            className="text-darkGray"
            href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
            target={"blank"}
            rel="noreferrer"
          >
            <p className="font-main-regular font-medium">
              {company.WebsiteId.ConfigId.CompanyId.Name}
            </p>
            <p className="font-main-regular font-medium">
              {company.WebsiteId.ConfigId.CompanyId.Street}
            </p>
            <p className="font-main-regular font-medium">
              {company.WebsiteId.ConfigId.CompanyId.Zip}
            </p>
          </a>
          <p className="underline font-semibold my-6">Rechtliches</p>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
          >
            <p className="font-main-regular font-medium text-darkGray cursor-pointer block">
              Anfahrt
            </p>
          </a>

          <Link
            href="/impressum"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutzerklaerung"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Datenschutzerklärung
          </Link>
        </div>
        <div className="font-medium">
          <p className="underline font-semibold mb-6">Kontakt</p>
          <a
            className="font-main-regular font-medium text-darkGray"
            href={"tel:" + company.WebsiteId.ConfigId.CompanyId.TelNumber}
          >
            Telefon: {company.WebsiteId.ConfigId.CompanyId.TelNumber}
          </a>
          <p className="font-main-regular font-medium">
            Fax: {company.WebsiteId.ConfigId.CompanyId.FaxNumber}
          </p>
          <a
            className="font-main-regular font-medium text-darkGray"
            href={"mailto:" + company.WebsiteId.ConfigId.CompanyId.Email}
          >
            {company.WebsiteId.ConfigId.CompanyId.Email}
          </a>
          <p className="underline font-semibold my-6">Menü</p>
          <Link
            href="/rund-um-immobilien#ratgeber"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Ratgeber
          </Link>
          <Link
            href="/referenzen"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Referenzen
          </Link>
          <Link
            href="/aktuelles"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Aktuelles
          </Link>
          <Link
            href="/kooperationen"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Partner
          </Link>
        </div>
        <div className="font-medium">
          <p className="underline font-semibold my-6 c1:mt-0 c1:mb-6">
            Immobiliengesuche
          </p>
          <Link
            href="/immobilien-gesuch-aufgeben"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Suche aufgeben
          </Link>
          <Link
            href="/wir-suchen"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Wir suchen
          </Link>
          <Link
            href="/kontakt"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Kontakt
          </Link>

          <p className="underline font-semibold my-6">Inserate</p>
          <Link
            href="/angebote"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Angebote
          </Link>
          <Link
            href="/angebote?c=1"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Mietangebote
          </Link>
          <Link
            href="/angebote?c=2"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Verkaufsangebote
          </Link>
          <Link
            href="/angebote?c=3"
            className="font-main-regular font-medium text-darkGray cursor-pointer block"
          >
            Besondere Angebote
          </Link>
        </div>
        <div className="font-main-regular mt-8 c1:mt-0 c3:pl-5">
          <p className="underline font-semibold font-sec-regular mb-6">
            Weitere Informationen
          </p>
          <Link
            href="/immobilienmakler-bad-langensalza"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Immobilienmakler Bad Langensalza
          </Link>
          <Link
            href="/haus-verkaufen-bad-langensalza"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Haus verkaufen Bad Langensalza
          </Link>
          <Link
            href="/wohnung-verkaufen-bad-langensalza"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Wohnung verkaufen Bad Langensalza
          </Link>
          <Link
            href="/grundstuecksverkauf-bad-langensalza"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Grundstücksverkauf Bad Langensalza
          </Link>
          <Link
            href="/immobilienmakler-soemmerda"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Immobilienmakler Sömmerda
          </Link>
          <Link
            href="/wohnung-verkaufen-soemmerda"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Wohnung verkaufen Sömmerda
          </Link>
          <Link
            href="/immobilienmakler-arnstadt"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Immobilienmakler Arnstadt
          </Link>
          <Link
            href="/haus-verkaufen-soemmerda"
            className="text-darkGray cursor-pointer flex gap-x-2 font-medium"
          >
            <AiOutlineCheck className="text-green text-[1.2rem] inline" />
            Haus verkaufen Sömmerda
          </Link>
        </div>
      </div>
    </footer>
  );
}
