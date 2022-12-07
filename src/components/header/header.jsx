import { component$, Resource, useSignal, useStore } from "@builder.io/qwik";
import { Link, useEndpoint, useLocation } from "@builder.io/qwik-city";
import { supabase } from "~/utils";
import {
  MapPinIcon,
  PhoneIcon,
  ChevronDownIcon,
  MenuIcon,
  ChevronRightIcon,
} from "qwik-feather-icons";
import OutlineButton from "../Elements/OutlineButton";

export const onGet = async () => {
  const { data } = await supabase
    .from("Pages")
    .select(`WebsiteId(ConfigId(*))`)
    .match({ WebsiteId: 9, URL: "/" })
    .single();

  return data;
};

export default component$(() => {
  const navigation = useEndpoint();
  const router = useLocation();
  let toggle = useSignal(false);
  let activeStep = useSignal(0);
  let activePage = useStore({ title: "", href: "", children: "" });

  return (
    <Resource
      value={navigation}
      onPending={() => <></>}
      onRejected={() => <div>Error</div>}
      onResolved={(nav) =>
        nav && (
          <>
            {/*  <pre>{JSON.stringify(nav, null, 2)}</pre> */}
            <div class="flex xl:flex-col flex-col-reverse w-screen overflow-x-clip  bg-darkBlue sticky top-0 font-sec-regular text-white z-50">
              <div class="bg-darkBlue z-40 w-full py-3 main-padding flex flex-row items-center justify-between">
                <div class="flex flex-row items-center gap-x-3">
                  <a
                    href="https://www.google.com/maps/place/Ronald+Merten+Immobilien+GmbH+Erfurt/@50.962222,11.028823,16z/data=!4m5!3m4!1s0x0:0x5c5678766203fd4b!8m2!3d50.9622217!4d11.0288227?hl=de"
                    target="_blank"
                    class="hidden xl:flex flex-row items-center gap-x-2 text-white hover:text-green "
                  >
                    <MapPinIcon />

                    <span class="mr-12 font-thin">
                      Am Hopfenberg 5, 99096 Erfurt
                    </span>
                  </a>
                  <a
                    href="tel:0361-347700"
                    class="font-thin hidden xl:flex flex-row items-center gap-x-1 text-white hover:text-green "
                  >
                    <PhoneIcon class="inline mr-2 font-thin" />
                    <span>0361-34770-0</span>
                  </a>
                </div>
                <div class="flex flex-row gap-x-4 ">
                  <OutlineButton
                    color={"green"}
                    text={"Marktwertanalyse"}
                    link={"/marktwertanalyse"}
                    hover="white"
                  />
                  <OutlineButton
                    color={"green"}
                    text={"Kontakt"}
                    link={"/kontakt"}
                    hover="white"
                  />
                  <a
                    href="tel:0361-347700"
                    class="font-thin xl:hidden flex items-center justify-center text-green border border-green px-2"
                  >
                    <PhoneIcon />
                  </a>
                </div>
              </div>

              <div class="bg-white w-full flex flex-row items-center main-padding justify-between py-5 shadow-md">
                <Link href={"/"}>
                  <div class="imageContainer bg-white relative w-[280px]  xl:w-[300px] cursor-pointer z-30">
                    <img
                      decode="async"
                      src={
                        "https://import-api.merten-immobilien.de/assets/logo.svg"
                      }
                      alt="media_references"
                      layout="fill"
                      objectFit="contain"
                      class="image_"
                      priority
                    />
                  </div>
                </Link>
                <div class="hidden xl:flex flex-row items-center gap-x-2 nav-text ">
                  {nav.WebsiteId.ConfigId.Navigation.map((page, key) => (
                    <div
                      key={key}
                      class="flex flex-col relative parent-item-nav"
                    >
                      <Link href={page.URL}>
                        <span class="h-full flex flex-row items-center gap-x-2 relative z-10">
                          <span
                            class={` font-sec-regular cursor-pointer hover:text-green font-bold text-darkBlue uppercase
                      ${
                        router.pathname === page.URL
                          ? "text-green"
                          : "text-darkBlue"
                      }`}
                          >
                            {page.Title}
                          </span>
                          {page.children.length > 0 && (
                            <span>
                              <ChevronDownIcon />
                            </span>
                          )}
                          {key < 8 && (
                            <div class="h-[15px] bg-darkBlue w-[1px]" />
                          )}
                        </span>
                      </Link>
                      {page.children && (
                        <div
                          class="flex flex-row flex-wrap absolute top-2 z-0 bg-white gap-y-0 py-5 pt-10 w-max dropdown-nav
                      xl:-right-52 c3:-right-64"
                        >
                          <div class="px-4 flex flex-col gap-y-2">
                            {page.children.map(
                              (child, key) =>
                                key < page.children.length / 2 && (
                                  <div key={key}>
                                    <Link href={child.URL}>
                                      <span
                                        class={`h-full flex flex-row items-center px-4 py-1 w-full link-drop ${
                                          !(
                                            key + 1 ===
                                            page.children.length / 2
                                          ) && "border-b"
                                        } border-darkGray`}
                                      >
                                        <span
                                          class={` font-sec-regular cursor-pointer hover:text-green font-normal text-darkBlue
                                    ${
                                      router.pathname === child.URL
                                        ? "text-green"
                                        : "text-darkBlue"
                                    }`}
                                        >
                                          <ChevronRightIcon class="inline mr-3 relative top-[-2px]" />
                                          {child.Title}
                                        </span>
                                      </span>
                                    </Link>
                                  </div>
                                )
                            )}
                          </div>
                          <div class="px-4 flex flex-col gap-y-2 last-no-border">
                            {page.children.map(
                              (child, key) =>
                                key > page.children.length / 2 - 1 && (
                                  <div key={key}>
                                    <Link href={child.URL}>
                                      <span
                                        class={`h-full a flex flex-row items-center px-4 py-1 w-full link-drop ${
                                          !(key + 1 === page.children.length) &&
                                          "border-b"
                                        } border-darkGray`}
                                      >
                                        <span
                                          class={` font-sec-regular cursor-pointer hover:text-green font-normal text-darkBlue
                                        ${
                                          router.pathname === child.URL
                                            ? "text-green"
                                            : "text-darkBlue"
                                        }`}
                                        >
                                          <ChevronRightIcon class="inline mr-3 relative top-[-2px]" />
                                          {child.Title}
                                        </span>
                                      </span>
                                    </Link>
                                  </div>
                                )
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <span
                  class="xl:hidden relative z-30 p-1"
                  onClick$={() => (toggle.value = !toggle.value)}
                >
                  <MenuIcon class="text-darkBlue relative z-20" />
                </span>
              </div>

              <div
                class={` pointer-events-none mt-[65px] md:mt-0 ${
                  toggle.value ? "opacity-100" : "opacity-0"
                } fixed top-0 left-0 z-10 w-screen h-screen bg-white flex flex-col justify-center items-center subline-text gap-y-7 text-darkBlue`}
              >
                {nav.WebsiteId.ConfigId.Navigation.map((page, key) => (
                  <div key={key}>
                    {!(page.children && page.children.length) ? (
                      <Link href={page.URL}>
                        <span
                          onClick$={() => (toggle.value = false)}
                          class={` font-sec-regular cursor-pointer hover:text-green font-bold text-darkBlue uppercase ${
                            toggle.value && "pointer-events-auto"
                          }
                      ${
                        router.pathname === page.URL
                          ? "text-green"
                          : "text-darkBlue"
                      }`}
                        >
                          {page.Title}
                        </span>
                      </Link>
                    ) : (
                      <span>
                        <span
                          onClick$={() => {
                            activePage.value = {
                              href: page.URL,
                              title: page.Title,
                              children: page.children,
                            };
                            activeStep.value = 1;
                          }}
                          class={` font-sec-regular cursor-pointer hover:text-green font-bold text-darkBlue uppercase ${
                            toggle.value && "pointer-events-auto"
                          }
                      ${
                        router.pathname === page.URL
                          ? "text-green"
                          : "text-darkBlue"
                      }`}
                        >
                          {page.Title}
                        </span>
                      </span>
                    )}
                  </div>
                ))}
                <div class="flex flex-row mt-10 gap-x-5 items-center">
                  <div class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer ">
                    <img
                      decode="async"
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_Facebook.svg"
                      }
                      alt="media_references"
                      layout="fill"
                      objectFit="contain"
                      class="image_"
                      priority
                    />
                  </div>
                  <div class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer ">
                    <img
                      decode="async"
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_Google.svg"
                      }
                      alt="media_references"
                      layout="fill"
                      objectFit="contain"
                      class="image_"
                      priority
                    />
                  </div>
                  <div class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer ">
                    <img
                      decode="async"
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_Instagram.svg"
                      }
                      alt="media_references"
                      layout="fill"
                      objectFit="contain"
                      class="image_"
                      priority
                    />
                  </div>
                  <div class="imageContainer relative w-[50px] c6:w-[70px] hover:scale-105 cursor-pointer ">
                    <img
                      decode="async"
                      src={
                        "https://import-api.merten-immobilien.de/assets/RMI_YouTube.svg"
                      }
                      alt="media_references"
                      layout="fill"
                      objectFit="contain"
                      class="image_"
                      priority
                    />
                  </div>
                </div>
              </div>
              <div
                class={`bg-white h-screen pt-[160px] px-10 w-screen absolute text-darkBlue duration-200 top-0 z-20  xl:hidden
              ${activeStep.value === 1 ? "left-0" : "left-[100vw]"} ${
                  toggle.value ? "opacity-100" : "opacity-0"
                }`}
              >
                {/* <p>{JSON.stringify(activePage)}</p> */}
                <div class="h-full pb-10 flex flex-col justify-center items-start">
                  {activePage.value && activePage.value.href && (
                    <>
                      <div
                        class="mb-2"
                        onClick$={() => {
                          activePage.value = {
                            title: "",
                            href: "",
                            children: "",
                          };
                          activeStep.value = 0;
                        }}
                      >
                        <ChevronRightIcon class="inline mr-2 -rotate-180 relative top-[-1px]" />
                        Zurück
                      </div>
                      <Link href={activePage.value.href}>
                        <p
                          class="font-semibold mb-5 border-b-2 border-darkBlue pb-1 w-full"
                          onClick$={() => (toggle.value = false)}
                        >
                          {activePage.value.title}
                        </p>
                      </Link>
                      <div class="h-full overflow-scroll flex flex-col">
                        {activePage.value.children.map((child, key) => (
                          <Link href={child.URL} key={key}>
                            <div
                              class="border-b border-darkGray py-1 w-full  line-clamp-1 max-w-[80vw]"
                              onClick$={() => (toggle.value = false)}
                            >
                              <ChevronRightIcon class={"inline mr-3"} />
                              {child.Title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )
      }
    />
  );
});
