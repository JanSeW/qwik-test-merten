import { component$, Slot } from "@builder.io/qwik";
import Header from "../components/header/header";
import Footer from "~/components/Footer";

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
});
