"use client";

import Cookies from "js-cookie";
import { Link } from "@builder.io/qwik-city";

export default function CookieConsent({ consent }) {
  /* 
  const [showConfig, setShowConfig] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [cookieCollection, setCookieCollection] = useState({}); */

  /*  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }; */

  /* const getCookieCollection = () => {
    for (let i = 0; i < consent.statistics.technologies.length; i++) {
      let tech = consent.statistics.technologies[i];
      if (tech.active) {
        cookieCollection[tech.id] = false;
      }
    }

    for (let i = 0; i < consent.marketing.technologies.length; i++) {
      let tech = consent.marketing.technologies[i];
      if (tech.active) {
        cookieCollection[tech.id] = false;
      }
    }

    for (let i = 0; i < consent.essential.technologies.length; i++) {
      let tech = consent.essential.technologies[i];
      if (tech.active) {
        cookieCollection[tech.id] = false;
      }
    }

    setCookieCollection({ ...cookieCollection });
    getCookieStorage();
  }; */

  /* const getCookieStorage = () => {
    let undefCookies = false;
    for (let k in cookieCollection) {
      let cok = Cookies.get(k);
      if (cok === undefined) {
        setShowConsent(true);
        undefCookies = true;
        cookieCollection.done = false;
      }
      if (cok === undefined || cok === "false") {
        cookieCollection[k] = false;
      } else if (cok === "true") {
        cookieCollection[k] = true;
      }
    }

    if (!undefCookies) cookieCollection.done = true;

    setCookieCollection({ ...cookieCollection });
  }; */
  /* const saveConsent = () => {
    for (let k in cookieCollection) {
      if (Cookies.get(k) === undefined) {
        Cookies.set(k, cookieCollection[k]);
      }
    }
  };

  const updateCookies = (id, value) => {
    if (id === "all") {
      for (let k in cookieCollection) {
        Cookies.set(k, value);
        cookieCollection[k] = value;
      }
      setShowConsent(false);
    }
    Cookies.set(id, value);
    cookieCollection[id] = value;

    Cookies.set("gtmTracking", true);
    cookieCollection["gtmTracking"] = true;
    setCookieCollection({ ...cookieCollection });
  };

  useEffect(() => {
    getCookieCollection();
  }, []);

  useEffect(() => {
    document.body.style.overflow = `${showConsent ? "hidden" : "scroll"}`;
  }, [showConsent]);

  useEffect(() => {
    let gtm = consent.essential.technologies[0].value;
    if (cookieCollection.done && gtm !== "" && !window.dataLayer) {
      TagManager.initialize({
        gtmId: gtm,
        dataLayer: cookieCollection,
      });
    } else {
      if (window.dataLayer) window.dataLayer.push(cookieCollection);
    }
  }, [cookieCollection]); */
  const showConfig = false;
  const showConsent = true;
  return (
    <>
      <div
        id="fingerprint-btn"
        /*  onClick={() => setShowConsent(true)} */
        className="hidden cursor-pointer z-[50] fixed h-[50px] w-[50px] left-10 bottom-5 bg-cookieTool shadow-md text-[2rem] rounded-md text-white flex items-center justify-center"
      >
        {/*      <IoFingerPrintOutline /> */}
      </div>
      {consent.active && showConsent && (
        <section
          id="cookie-consent"
          className="z-[99] px-5 lg:px-0 fixed top-0 left-0 h-screen w-screen flex flex-col bg-[#00000080] items-center justify-end pb-20"
        >
          <div
            className={`duration-300 relative z-10 h-[500px] overflow-hidden flex-col flex justify-end`}
          >
            <div
              className={`w-[95%] ${
                showConfig ? "opacity-100" : "opacity-0"
              } top-0 relative z-30 h-[1px] bg-[#c3c3c3] mx-auto`}
            ></div>
            <div
              className={`relative bg-[#fff] z-10 flex flex-col md:flex-row items-center md:items-start px-5 pb-4 pt-5 ${
                showConfig ? "rounded-b-md" : "rounded-md"
              }`}
            >
              <div className="flex flex-col justify-between pr-5 md:max-w-[360px] lg:max-w-[500px]">
                <p className="block md:hidden text-center mb-5 font-bold">
                  Diese Website verwendet Cookies
                </p>
                <p className="text-[#777777] text-justify text-[0.7rem]">
                  {consent.pre_text}
                </p>
                <a
                  className="text-[#000] hidden md:block hover:text-black mt-2 text-justify text-[0.7rem]"
                  href="https://ambitive.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  {consent.powered_by_text}
                </a>
              </div>
              <div className="flex flex-col items-center md:items-end mt-5 md:mt-0 justify-between gap-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <button
                    className="border border-[#c3c3c3] text-black px-5 py-2 rounded-md font-medium h-[60px] 
                        transition-all duration-300 hover:bg-[#f4f4f4]"
                    /*   onClick={() => updateCookies("all", false)} */
                  >
                    {consent.disable_text}
                  </button>
                  <button
                    className="bg-[#198754] px-3 py-2 rounded-md  font-medium w-[240px] h-[60px] 
                        transition-all duration-300 text-white hover:text-white hover:bg-[#147749]"
                    /*  onClick={() => updateCookies("all", true)} */
                  >
                    {consent.accept_text}
                  </button>
                </div>
                <div className="text-[0.8rem] font-normal text-center">
                  <p
                    className="text-[#000] hover:text-black inline-block hover:underline cursor-pointer"
                    /*  onClick={() => setShowConfig(!showConfig)} */
                  >
                    {consent.settings_text}
                  </p>
                  <span className="px-2">|</span>
                  <Link
                    href="/datenschutz"
                    className="text-[#000] font-normal hover:text-black"
                  >
                    {consent.policy_text}
                  </Link>
                  <span className="px-2">|</span>
                  <Link
                    href="/impressum"
                    className="text-[#000] font-normal hover:text-black"
                  >
                    {consent.imprint_text}
                  </Link>
                </div>
                <a
                  className="text-[#000] block md:hidden hover:text-black mt-2 text-justify text-[0.7rem]"
                  href="https://ambitive.de"
                  target="_blank"
                  rel="noreferrer"
                >
                  {consent.powered_by_text}
                </a>
              </div>
            </div>
            {/*  <div
              className={`${
                showConfig
                  ? "opacity-100 top-0"
                  : "opacity-0 top-[400px] pointer-events-none"
              } duration-300 bg-white rounded-md md:rounded-t-md w-full left-0 flex flex-row  z-30 h-[500px] md:h-[400px] md:z-0 absolute p-5 pt-16 md:pt-10 pb-0 md:pb-8`}
            >
            
              <button
                className="bg-[#198754] hidden md:block px-3 py-2 rounded-md z-20 font-medium h-[60px] absolute right-5 top-4 
                        transition-all duration-300 text-white hover:bg-[#147749] cursor-pointer"
               onClick={() => {
                  setShowConsent(false);
                  saveConsent();
                  location.reload();
                }}
              >
                Speichern
              </button>
              <div className="hidden md:block w-1/4 rounded-md h-full bg-[#dddddd] relative -top-5 p-3">
                <p className="font-medium text-[1.2rem] mb-2">Marketing</p>
                {consent.marketing.technologies.map(
                  (tech, key) =>
                    tech.active && (
                      <div key={key}>
                        <p
                          className="cursor-pointer duration-300"
                          onClick={() => scrollToSection(tech.name)}
                        >
                          {tech.name}
                        </p>
                      </div>
                    )
                )}
                <div className="w-full h-[1px] bg-[#a4a4a4] my-3"></div>
                <p className="font-medium text-[1.2rem] mb-2">Statistik</p>
                {consent.statistics.technologies.map(
                  (tech, key) =>
                    tech.active && (
                      <div key={key}>
                        <p
                          className="cursor-pointer duration-300"
                          onClick={() => scrollToSection(tech.name)}
                        >
                          {tech.name}
                        </p>
                      </div>
                    )
                )}
                <div className="w-full h-[1px] bg-[#a4a4a4] my-3"></div>
                <p className="font-medium text-[1.2rem] mb-2">Esentiell</p>
                {consent.essential.technologies.map(
                  (tech, key) =>
                    tech.active && (
                      <div key={key}>
                        <p
                          className="cursor-pointer duration-300"
                          onClick={() => scrollToSection(tech.name)}
                        >
                          {tech.name}
                        </p>
                      </div>
                    )
                )}
              </div>
              <div className="flex flex-col relative z-10 -top-5 ml-5 md:w-3/4 overflow-scroll overflow-x-clip">
                <p className="font-medium text-[1.2rem]">Marketing</p>
                {consent.marketing.technologies.map(
                  (tech, key) =>
                    tech.active && (
                      <div key={key} className="mt-5" id={tech.name}>
                        <div className="flex flex-row items-center gap-3">
                          <p
                            className="text-[1.2rem] font-bold duration-300"
                            onClick={() => scrollToSection(tech.name)}
                          >
                            {tech.name}
                          </p>
                          <div
                            className={`h-7 w-7 border-2 border-[#c3c3c3] cursor-pointer duration-300 ${
                              cookieCollection[tech.id] === true &&
                              "bg-[#198754]"
                            }`}
                            onClick={() =>
                              updateCookies(tech.id, !cookieCollection[tech.id])
                            }
                          >
                            <svg
                              stroke="#fff"
                              fill="#fff"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative left-1 top-1"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </div>
                        </div>
                        {Object.keys(tech).map(
                          (section, keyS) =>
                            section !== "active" &&
                            section !== "name" &&
                            section !== "id" && (
                              <div key={keyS}>
                                <p className="text-[#868686] mt-5 mb-3">
                                  {tech[section].label}
                                </p>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: tech[section].text,
                                  }}
                                />
                                {tech[section].list &&
                                  tech[section].list.map((list, keyL) => (
                                    <p
                                      className="bg-[#e4e4e4] p-2 mr-2 my-3 inline-block rounded-md"
                                      key={keyL}
                                    >
                                      {list}
                                    </p>
                                  ))}
                              </div>
                            )
                        )}
                      </div>
                    )
                )}
                <p className="font-medium text-[1.2rem] mb-2">Statistik</p>
                {consent.statistics.technologies.map(
                  (tech, key) =>
                    tech.active && (
                      <div key={key} className="mt-5" id={tech.name}>
                        <div className="flex flex-row items-center gap-3">
                          <p
                            className="text-[1.2rem] font-bold duration-300"
                            onClick={() => scrollToSection(tech.name)}
                          >
                            {tech.name}
                          </p>
                          <div
                            className={`h-7 w-7 border-2 border-[#c3c3c3] cursor-pointer duration-300 ${
                              cookieCollection[tech.id] === true &&
                              "bg-[#198754]"
                            }`}
                            onClick={() =>
                              updateCookies(tech.id, !cookieCollection[tech.id])
                            }
                          >
                            <svg
                              stroke="#fff"
                              fill="#fff"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative left-1 top-1"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </div>
                        </div>
                        {Object.keys(tech).map(
                          (section, keyS) =>
                            section !== "active" &&
                            section !== "name" &&
                            section !== "id" && (
                              <div key={keyS}>
                                <p className="text-[#868686] mt-5 mb-3">
                                  {tech[section].label}
                                </p>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: tech[section].text,
                                  }}
                                />
                                {tech[section].list &&
                                  tech[section].list.map((list, keyL) => (
                                    <p
                                      className="bg-[#e4e4e4] p-2 mr-2 my-3 inline-block rounded-md"
                                      key={keyL}
                                    >
                                      {list}
                                    </p>
                                  ))}
                              </div>
                            )
                        )}
                      </div>
                    )
                )}
                <p className="font-medium text-[1.2rem] mb-2">Esentiell</p>
                {consent.essential.technologies.map(
                  (tech, key) =>
                    tech.active && (
                      <div key={key} className="mt-5" id={tech.name}>
                        <div className="flex flex-row items-center gap-3">
                          <p
                            className="text-[1.2rem] font-bold duration-300"
                            onClick={() => scrollToSection(tech.name)}
                          >
                            {tech.name}
                          </p>
                          <div
                            className={`h-7 w-7 border-2 border-[#c3c3c3] cursor-pointer duration-300 ${
                              cookieCollection[tech.id] === true &&
                              "bg-[#198754]"
                            }`}
                            onClick={() =>
                              updateCookies(tech.id, !cookieCollection[tech.id])
                            }
                          >
                            <svg
                              stroke="#fff"
                              fill="#fff"
                              strokeWidth="0"
                              viewBox="0 0 512 512"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                              className="relative left-1 top-1"
                            >
                              <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path>
                            </svg>
                          </div>
                        </div>
                        {Object.keys(tech).map(
                          (section, keyS) =>
                            section !== "active" &&
                            section !== "name" &&
                            section !== "id" &&
                            tech[section].text && (
                              <div key={keyS}>
                                <p className="text-[#868686] mt-5 mb-3">
                                  {tech[section].label}
                                </p>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: tech[section].text,
                                  }}
                                />
                                {tech[section].list &&
                                  tech[section].list.map((list, keyL) => (
                                    <p
                                      className="bg-[#e4e4e4] p-2 mr-2 my-3 inline-block rounded-md"
                                      key={keyL}
                                    >
                                      {list}
                                    </p>
                                  ))}
                              </div>
                            )
                        )}
                      </div>
                    )
                )}
                <button
                  className="bg-[#198754] md:hidden px-3 mt-5 rounded-md z-20 font-medium h-[60px] py-3 
                        transition-all duration-300 text-white hover:bg-[#147749] cursor-pointer"
                  onClick={() => {
                    setShowConsent(false);
                    saveConsent();
                    location.reload();
                  }}
                >
                  Speichern
                </button>
              </div>
            </div> */}
          </div>
        </section>
      )}
    </>
  );
}
