import { component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(({ data }) => {
  const store = useStore({ count: 0 });
  return (
    <main>
      <h1 class="text-center py-20">
        Im a headline of a dynamically loaded component clone: {data.headline_0}
      </h1>
      <div class="flex flex-col items-center justify-center py-5">
        <button onClick$={() => store.count++}>Count me up!</button>
        <p>{store.count}</p>
      </div>
    </main>
  );
});

export const DocumentHead = {
  title: "Welcome to Demo Load Comps",
};
