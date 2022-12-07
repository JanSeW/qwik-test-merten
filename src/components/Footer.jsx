import { component$, Resource } from "@builder.io/qwik";
import { Link, useEndpoint } from "@builder.io/qwik-city";
import { CheckIcon } from "qwik-feather-icons";

export default component$(() => {
  const footer = useEndpoint();
  return (
    <Resource
      value={footer}
      onPending={() => <></>}
      onRejected={() => <div>Error</div>}
      onResolved={(footer) =>
        footer && (
          <>
            {/*  <pre>
            {JSON.stringify(footer.WebsiteId.ConfigId.CompanyId, null, 2)}
          </pre> */}
            <div class="py-10 border-t-2 border-lightGray bg-white flex flex-col md:flex-row w-screen main-padding font-sec-regular gap-x-16">
              <div class="w-full md:w-1/2">
                <p class="text-darkBlue subline-text underline font-semibold mb-12">
                  Zertifikate und Gütesiegel
                </p>
                <div class="flex flex-row gap-x-8 items-start">
                  <div class="imageContainer relative w-[70px]">
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/ivd_2_svg.svg"
                      }
                      alt="IVD Logo"
                      decoding="async"
                      loading="lazy"
                      width={70}
                      height="100%"
                    />
                  </div>
                  <div class="imageContainer relative w-[100px]">
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/ivd_logo.svg"
                      }
                      alt="IVD Logo"
                      decoding="async"
                      loading="lazy"
                      width={100}
                      height="100%"
                    />
                  </div>
                  <div class="imageContainer relative w-[100px]">
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/csm_logo.svg"
                      }
                      alt="CSM Logo"
                      decoding="async"
                      loading="lazy"
                      width={100}
                      height="100%"
                    />
                  </div>
                  <div class="imageContainer relative w-[100px]">
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/csm_logo_1.svg"
                      }
                      alt="CSM Logo"
                      decoding="async"
                      loading="lazy"
                      width={100}
                      height="100%"
                    />
                  </div>
                  <a
                    href="https://www.werkenntdenbesten.de/e/27517231/immobilienmakler/erfurt/ronald-merten-immobilien-gmbh-immobilienmakler-bewertungen.html"
                    target={"_blank"}
                    rel="noreferrer"
                    class="imageContainer relative w-[70px]"
                  >
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/den-besten.svg"
                      }
                      alt="Wer kennt den Besten Logo"
                      decoding="async"
                      loading="lazy"
                      width={70}
                      height="100%"
                    />
                  </a>
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <p class="text-darkBlue subline-text underline font-semibold mt-8 md:mt-0 mb-16">
                  Folgen Sie uns auf den sozialen Netzwerken
                </p>
                <div class="flex flex-row flex-grow gap-x-5 items-center">
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.facebook.com/mertenimmobilien/"
                    class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
                  >
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_Facebook.svg"
                      }
                      alt="Facebook Merten Immobilien Logo"
                      decoding="async"
                      loading="lazy"
                      width={70}
                      height="100%"
                    />
                  </a>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
                    class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
                  >
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_Google.svg"
                      }
                      alt="Google Merten Immobilien Logo"
                      decoding="async"
                      loading="lazy"
                      width={70}
                      height="100%"
                    />
                  </a>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.instagram.com/mertenimmobilien/"
                    class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
                  >
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_Instagram.svg"
                      }
                      alt="Instagram Merten Immobilien Logo"
                      decoding="async"
                      loading="lazy"
                      width={70}
                      height="100%"
                    />
                  </a>
                  <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UC6D6pkXepG2Pc0iZYKhCd1A/discussion"
                    class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer duration-300"
                  >
                    <img
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_YouTube.svg"
                      }
                      alt="Youtube Merten Immobilien Logo"
                      decoding="async"
                      loading="lazy"
                      width={70}
                      height="100%"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div class="w-full main-padding pt-12 pb-10 xl:pb-16 bg-darkBlue grid grid-cols-1 md:grid-cols-2 c1:grid-cols-4 text-darkGray flow-text">
              <div class="">
                <p class="underline font-semibold mb-6">Hier finden Sie uns</p>
                <a
                  class="text-darkGray"
                  href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
                  target={"blank"}
                  rel="noreferrer"
                >
                  <p class="font-main-regular font-medium">
                    {footer.WebsiteId.ConfigId.CompanyId.Name}
                  </p>
                  <p class="font-main-regular font-medium">
                    {footer.WebsiteId.ConfigId.CompanyId.Street}
                  </p>
                  <p class="font-main-regular font-medium">
                    {footer.WebsiteId.ConfigId.CompanyId.Zip}
                  </p>
                </a>
                <p class="underline font-semibold my-6">Rechtliches</p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
                >
                  <p class="font-main-regular font-medium text-darkGray cursor-pointer block">
                    Anfahrt
                  </p>
                </a>

                <Link
                  href="/impressum"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Impressum
                </Link>
                <Link
                  href="/datenschutzerklaerung"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Datenschutzerklärung
                </Link>
              </div>
              <div class="font-medium">
                <p class="underline font-semibold mb-6">Kontakt</p>
                <a
                  class="font-main-regular font-medium text-darkGray"
                  href={"tel:" + footer.WebsiteId.ConfigId.CompanyId.TelNumber}
                >
                  Telefon: {footer.WebsiteId.ConfigId.CompanyId.TelNumber}
                </a>
                <p class="font-main-regular font-medium">
                  Fax: {footer.WebsiteId.ConfigId.CompanyId.FaxNumber}
                </p>
                <a
                  class="font-main-regular font-medium text-darkGray"
                  href={"mailto:" + footer.WebsiteId.ConfigId.CompanyId.Email}
                >
                  {footer.WebsiteId.ConfigId.CompanyId.Email}
                </a>
                <p class="underline font-semibold my-6">Menü</p>
                <Link
                  href="/rund-um-immobilien#ratgeber"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Ratgeber
                </Link>
                <Link
                  href="/referenzen"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Referenzen
                </Link>
                <Link
                  href="/aktuelles"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Aktuelles
                </Link>
                <Link
                  href="/kooperationen"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Partner
                </Link>
              </div>
              <div class="font-medium">
                <p class="underline font-semibold my-6 c1:mt-0 c1:mb-6">
                  Immobiliengesuche
                </p>
                <Link
                  href="/immobilien-gesuch-aufgeben"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Suche aufgeben
                </Link>
                <Link
                  href="/wir-suchen"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Wir suchen
                </Link>
                <Link
                  href="/kontakt"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Kontakt
                </Link>

                <p class="underline font-semibold my-6">Inserate</p>
                <Link
                  href="/angebote"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Angebote
                </Link>
                <Link
                  href="/angebote?c=1"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Mietangebote
                </Link>
                <Link
                  href="/angebote?c=2"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Verkaufsangebote
                </Link>
                <Link
                  href="/angebote?c=3"
                  class="font-main-regular font-medium text-darkGray cursor-pointer block"
                >
                  Besondere Angebote
                </Link>
              </div>
              <div class="font-main-regular mt-8 c1:mt-0 c3:pl-5">
                <p class="underline font-semibold font-sec-regular mb-6">
                  Weitere Informationen
                </p>
                <Link
                  href="/immobilienmakler-bad-langensalza"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Immobilienmakler Bad Langensalza
                </Link>
                <Link
                  href="/haus-verkaufen-bad-langensalza"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Haus verkaufen Bad Langensalza
                </Link>
                <Link
                  href="/wohnung-verkaufen-bad-langensalza"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Wohnung verkaufen Bad Langensalza
                </Link>
                <Link
                  href="/grundstuecksverkauf-bad-langensalza"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Grundstücksverkauf Bad Langensalza
                </Link>
                <Link
                  href="/immobilienmakler-soemmerda"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Immobilienmakler Sömmerda
                </Link>
                <Link
                  href="/wohnung-verkaufen-soemmerda"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Wohnung verkaufen Sömmerda
                </Link>
                <Link
                  href="/immobilienmakler-arnstadt"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Immobilienmakler Arnstadt
                </Link>
                <Link
                  href="/haus-verkaufen-soemmerda"
                  class="text-darkGray cursor-pointer flex gap-x-2 font-medium"
                >
                  <CheckIcon class="text-green text-[1.2rem] inline" />
                  Haus verkaufen Sömmerda
                </Link>
              </div>
            </div>
          </>
        )
      }
    />
  );
});
