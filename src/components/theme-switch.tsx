const Themes = [
  {
    name: "light",
    title: "Light",
  },
  {
    name: "dark",
    title: "Dark",
  },
  {
    name: "cupcake",
    title: "Cupcake",
  },
  {
    name: "bumblebee",
    title: "Bumblebee",
  },
  {
    name: "emerald",
    title: "Emerald",
  },
  {
    name: "corporate",
    title: "Corporate",
  },
  {
    name: "synthwave",
    title: "Synthwave",
  },
  {
    name: "retro",
    title: "Retro",
  },
  {
    name: "cyberpunk",
    title: "Cyberpunk",
  },
  {
    name: "valentine",
    title: "Valentine",
  },
  {
    name: "halloween",
    title: "Halloween",
  },
  {
    name: "garden",
    title: "Garden",
  },
  {
    name: "forest",
    title: "Forest",
  },
  {
    name: "aqua",
    title: "Aqua",
  },
  {
    name: "lofi",
    title: "Lofi",
  },
  {
    name: "pastel",
    title: "Pastel",
  },
  {
    name: "fantasy",
    title: "Fantasy",
  },
  {
    name: "wireframe",
    title: "Wireframe",
  },
  {
    name: "black",
    title: "Black",
  },
  {
    name: "luxury",
    title: "Luxury",
  },
  {
    name: "dracula",
    title: "Dracula",
  },
  {
    name: "cmyk",
    title: "Cmyk",
  },
  {
    name: "autumn",
    title: "Autumn",
  },
  {
    name: "business",
    title: "Business",
  },
  {
    name: "acid",
    title: "Acid",
  },
  {
    name: "lemonade",
    title: "Lemonade",
  },
  {
    name: "night",
    title: "Night",
  },
  {
    name: "coffee",
    title: "Coffee",
  },
  {
    name: "winter",
    title: "Winter",
  },
  {
    name: "dim",
    title: "Dim",
  },
  {
    name: "nord",
    title: "Nord",
  },
  {
    name: "sunset",
    title: "Sunset",
  },
  {
    name: "caramellatte",
    title: "Caramellatte",
  },
  {
    name: "abyss",
    title: "Abyss",
  },
  {
    name: "silk",
    title: "Silk",
  },
];

export default function ThemeSwitch() {
  return (
    <>
      <details className="dropdown">
        <summary className="btn btn-sm btn-ghost drawer-button font-normal">
          Themes
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
          {Themes.map((theme) => (
            <li key={theme.name}>
              <a
                className="gap-3 px-2"
                data-set-theme={theme.name}
                data-act-class="ACTIVECLASS"
              >
                <div
                  data-theme={theme.name}
                  className="bg-base-100 grid shrink-0 grid-cols-2 gap-0.5 rounded-md p-1 shadow-sm"
                >
                  <div className="rounded-full bg-base-content size-1"></div>
                  <div className="rounded-full bg-primary size-1"></div>
                  <div className="rounded-full bg-secondary size-1"></div>
                  <div className="rounded-full bg-accent size-1"></div>
                </div>
                <div className="w-32 truncate">{theme.title}</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="invisible w-3 h-3 shrink-0"
                >
                  <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
