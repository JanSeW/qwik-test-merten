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

import { supabase } from "../utils/index";

export const ComponentStore = {
  Image: Image,
  InhaltKopfbereich: InhaltKopfbereich,
  AngebotsWidget: AngebotsWidget,
  Bewertungen: Bewertungen,
  Checkliste: Checkliste,
  Footer: Footer,
  InhaltsBlock: InhaltsBlock,
  VideoWidget: VideoWidget,
};

export const onGet = async () => {
  const { data } = await supabase
    .from("Pages")
    .select(`*,WebsiteId(ConfigId(*))`)
    .match({ WebsiteId: 9, URL: "/" })
    .single();

  let pageAPI = data;
  for (let i = 0; i < pageAPI.Components.length; i++) {
    console.log(ComponentStore[pageAPI.Components[i].name]);
    //pageAPI.Components[i].render = ComponentStore[pageAPI.Components[i].name];
  }

  return pageAPI;
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
            {/*  <pre>{JSON.stringify(page, null, 2)}</pre> */}
            <Image data={page.Components[0].fields} />
            <InhaltKopfbereich data={page.Components[1].fields} />
            <AngebotsWidget data={page.Components[2].fields} />
            <InhaltsBlock data={page.Components[3].fields} />
            <Checkliste data={page.Components[4].fields} />
            <Bewertungen data={page.Components[5].fields} />
            <VideoWidget data={page.Components[6].fields} />
            <InhaltsBlock data={page.Components[7].fields} />
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
