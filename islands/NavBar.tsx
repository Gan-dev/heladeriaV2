import { useEffect, useState } from "preact/hooks";

const NAV_LINKS = [
  { label: "Copas", href: "#copas" },
  { label: "Helados", href: "#icecream" },
  { label: "Granizados", href: "#granizado" },
];

// Must match DOM order so the last-wins scroll spy is correct
const SECTION_IDS = ["copas", "icecream", "granizado"];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // Scroll spy: marca la sección activa
  useEffect(() => {
    const onScroll = () => {
      setScrolled(globalThis.scrollY > 10);

      let current = "";
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActive(current);
    };

    globalThis.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => globalThis.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  const handleAnchor = (
    e: MouseEvent,
    href: string,
  ) => {
    if (!href.startsWith("#")) return; // link normal, deja que navegue
    e.preventDefault();
    setOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeHref = active ? `#${active}` : "#copas";

  return (
    <header
      class={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur shadow-md"
          : "bg-white/80 backdrop-blur"
      }`}
    >
      <div class="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          class="font-allura font-bold text-2xl sm:text-4xl leading-none select-none truncate max-w-[200px] sm:max-w-none"
        >
          Heladeria Roma
        </a>

        {/* Desktop nav */}
        <nav class="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleAnchor(e as unknown as MouseEvent, link.href)}
                class={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Hamburger button (mobile) */}
        <button
          type="button"
          class="md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            setOpen((v) => !v);
          }}
          aria-label="Menú"
        >
          <span
            class={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            class={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${
              open ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            class={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 origin-center ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        class={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav class="flex flex-col px-4 pb-4 gap-1 bg-white border-t border-gray-100">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === activeHref;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) =>
                  handleAnchor(e as unknown as MouseEvent, link.href)}
                class={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
