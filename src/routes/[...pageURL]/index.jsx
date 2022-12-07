import { component$, Resource } from "@builder.io/qwik";
import { useEndpoint } from "@builder.io/qwik-city";

import Image from "~/components/Image.jsx";
import InhaltKopfbereich from "~/components/InhaltKopfbereich.jsx";
import AngebotsWidget from "~/components/AngebotsWidget.jsx";
import Bewertungen from "~/components/Bewertungen.jsx";
import Checkliste from "~/components/Checkliste.jsx";
import InhaltsBlock from "~/components/InhaltsBlock.jsx";
import VideoWidget from "~/components/VideoWidget.jsx";

import { supabase } from "../../utils/index";

export const onGet = async ({ params }) => {
  if (!params.pageURL.includes("fonts")) {
    console.log(params.pageURL.slice(0, -1));
    const { data } = await supabase
      .from("Pages")
      .select(`*,WebsiteId(ConfigId(*, CompanyId(*)))`)
      .match({ WebsiteId: 9, URL: "/" + params.pageURL.slice(0, -1) })
      .single();
    return data;
  }
};

export default component$(() => {
  const page = useEndpoint();

  return (
    <main>
      <Resource
        value={page}
        onPending={() => <></>}
        onRejected={() => <div>Error</div>}
        onResolved={(page) => (
          <main>
            {/*   <pre>{JSON.stringify(page, null, 2)}</pre> */}
            {page &&
              page.Components.length > 0 &&
              page.Components.map((Component, key) =>
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
