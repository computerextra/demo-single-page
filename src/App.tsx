import { useEffect } from "react";
import { themeChange } from "theme-change";
import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Hero from "./components/hero";
import ThemeSwitch from "./components/theme-switch";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  useEffect(() => {
    window.addEventListener("click", () => {
      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        const elem = dropdown as HTMLDetailsElement;
        elem.open = false;
      });
    });
    return () =>
      window.removeEventListener("click", () => {
        document.querySelectorAll(".dropdown").forEach((dropdown) => {
          const elem = dropdown as HTMLDetailsElement;
          elem.open = false;
        });
      });
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-around bg-base-100 fixed w-full">
        <a
          className="btn btn-sm btn-ghost drawer-button font-normal"
          href="#start"
        >
          Start
        </a>
        <a
          className="btn btn-sm btn-ghost drawer-button font-normal"
          href="#about"
        >
          Über uns
        </a>
        <a
          className="btn btn-sm btn-ghost drawer-button font-normal"
          href="#contact"
        >
          Kontakt
        </a>
        <a
          href="https://computer-extra.de/Impressum"
          className="btn btn-sm btn-ghost drawer-button font-normal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Impressum
        </a>
        <a
          href="https://computer-extra.de/Datenschutz"
          className="btn btn-sm btn-ghost drawer-button font-normal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutz
        </a>
        <ThemeSwitch />
      </div>
      <Hero />

      <div className="flex w-full flex-col">
        <About />
        <div className="divider"></div>
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
