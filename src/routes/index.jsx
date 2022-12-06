import { component$, Resource } from "@builder.io/qwik";
import { useEndpoint } from "@builder.io/qwik-city";

import Image from "~/components/Image.jsx";
import InhaltKopfbereich from "~/components/InhaltKopfbereich.jsx";
import AngebotsWidget from "~/components/AngebotsWidget.jsx";
import Bewertungen from "~/components/Bewertungen.jsx";
import Checkliste from "~/components/Checkliste.jsx";
import Footer from "~/components/Footer.jsx";
import InhaltsBlock from "~/components/InhaltsBlock.jsx";
import VideoWidget from "~/components/VideoWidget.jsx";
import CookieConsent from "~/components/CookieConsent";

import { supabase } from "../utils/index";

export const onGet = async () => {
  const { data } = await supabase
    .from("Pages")
    .select(`*,WebsiteId(ConfigId(*))`)
    .match({ WebsiteId: 9, URL: "/" })
    .single();

  return data;
};

export default component$(() => {
  const page = useEndpoint();
  return (
    <main>
      <Resource
        value={page}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(page) => (
          <main>
            {/*   <pre>{JSON.stringify(page.WebsiteId, null, 2)}</pre> */}
            {page.Components.map((Component, key) =>
              Component.name === "InhaltKopfbereich" ? (
                <InhaltKopfbereich data={Component.fields} />
              ) : Component.name === "Image" ? (
                <Image data={Component.fields} />
              ) : Component.name === "AngebotsWidget" ? (
                <AngebotsWidget data={Component.fields} />
              ) : Component.name === "InhaltsBlock" ? (
                <InhaltsBlock data={Component.fields} />
              ) : Component.name === "Checkliste" ? (
                <Checkliste data={Component.fields} />
              ) : Component.name === "Bewertungen" ? (
                <Bewertungen data={Component.fields} />
              ) : (
                <></>
              )
            )}
            {/*  <InhaltKopfbereich data={page.Components[1].fields} />
            <Image data={page.Components[0].fields} />
            <AngebotsWidget data={page.Components[2].fields} />
            <InhaltsBlock data={page.Components[3].fields} />
            <Checkliste data={page.Components[4].fields} />
            <Bewertungen data={page.Components[5].fields} />
            <VideoWidget data={page.Components[6].fields} />
            <InhaltsBlock data={page.Components[7].fields} /> */}
            {/* <Footer data={page.Components[8].fields} /> */}
          </main>
        )}
      />
    </main>
  );
});

export const head = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
