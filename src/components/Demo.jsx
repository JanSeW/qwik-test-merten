import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(({ data }) => {
  console.log(data);
  return (
    <main>
      <h1 class="text-center py-20">
        Im a headline of a dynamically loaded component: {data.headline_0}
      </h1>
    </main>
  );
});

export const DocumentHead = {
  title: "Welcome to Demo Load Comps",
};
