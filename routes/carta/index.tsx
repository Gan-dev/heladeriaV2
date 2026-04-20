import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Copas } from "../../components/Copas.tsx";
import { Footer } from "../../components/Footer.tsx";
import NavBar from "../../islands/NavBar.tsx";
import FilterIce from "../../islands/FilterIce.tsx";
import {
  Copa,
  getIces,
  HeladosData,
  PrecioGrupo,
  PrecioItem,
} from "../../utils/getHelados.ts";

export const handler: Handlers = {
  async GET(_req, context) {
    const ices = await getIces();
    return context.render({ ices: ices });
  },
};

export default function Home(props: PageProps<{ ices: HeladosData }>) {
  const { data } = props;
  const { ices } = data;

  return (
    <>
      <Head>
        <title>Heladeria Roma | Carta</title>
        <link rel="stylesheet" href="/dist/css/main.css" />
        <link rel="stylesheet" href="/dist/css/components.css" />
        <link rel="stylesheet" href="/style.css" />
        <style>
          {`
          html { scroll-behavior: smooth; }
          .section-anchor { scroll-margin-top: 80px; }

          @-webkit-keyframes slideUp {
            from { -webkit-transform: translateY(100%); transform: translateY(100%); opacity: 0; }
            to   { -webkit-transform: translateY(0);    transform: translateY(0);    opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
          }
          .animate-slideUp {
            -webkit-animation: slideUp 0.28s cubic-bezier(0.32,0.72,0,1) both;
                    animation: slideUp 0.28s cubic-bezier(0.32,0.72,0,1) both;
            will-change: transform, opacity;
          }
          .modal-backdrop {
            background: rgba(0,0,0,0.6);
            -webkit-backdrop-filter: blur(4px);
                    backdrop-filter: blur(4px);
          }
          .nav-blur {
            -webkit-backdrop-filter: blur(12px) saturate(1.5);
                    backdrop-filter: blur(12px) saturate(1.5);
            background: rgba(255,255,255,0.92);
          }
          .nav-blur-light {
            -webkit-backdrop-filter: blur(8px);
                    backdrop-filter: blur(8px);
            background: rgba(255,255,255,0.75);
          }
        `}
        </style>
      </Head>

      <NavBar />

      <main class="section-menu-card max-w-4xl mx-auto px-4 sm:px-8 pb-12">
        {/* Quick-nav */}
        <nav class="flex flex-wrap items-center justify-center gap-1 border-b border-gray-200 py-4 mb-2 text-xs font-bold uppercase tracking-widest text-gray-500">
          <a
            href="#copas"
            class="px-4 py-1 hover:text-gray-900 transition-colors"
          >
            🍨 Copas
          </a>
          <span class="text-gray-300 select-none">|</span>
          <a
            href="#icecream"
            class="px-4 py-1 hover:text-gray-900 transition-colors"
          >
            🍦 Helados
          </a>
          <span class="text-gray-300 select-none">|</span>
          <a
            href="#granizado"
            class="px-4 py-1 hover:text-gray-900 transition-colors"
          >
            🧊 Granizados
          </a>
        </nav>

        {/* ── Copas ── */}
        <section class="section-anchor mb-16" id="copas">
          <div class="flex items-center gap-4 mb-10">
            <div class="flex-1 h-px bg-gray-300" />
            <div class="text-center px-2">
              <p class="text-xs uppercase tracking-widest text-gray-400 mb-0.5">
                Nuestras
              </p>
              <h2 class="text-2xl sm:text-3xl font-bold tracking-wide">
                Copas
              </h2>
            </div>
            <div class="flex-1 h-px bg-gray-300" />
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ices.copas.map((item: Copa) => (
              <article
                class="group flex flex-col items-center bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                key={item.name}
              >
                <div class="w-full bg-gray-50 flex items-center justify-center p-4 h-44">
                  {item.img
                    ? (
                      <img
                        src={item.img}
                        alt={item.name}
                        loading="lazy"
                        class="max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    )
                    : <span class="text-5xl select-none">🍨</span>}
                </div>
                <div class="w-full px-3 py-3 text-center border-t border-gray-100">
                  <p class="font-semibold text-gray-800 text-sm leading-tight">
                    {item.name}
                  </p>
                  <p class="mt-1 font-bold text-gray-900">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Helados con filtro ── */}
        <section class="section-anchor mb-16" id="icecream">
          <div class="flex items-center gap-4 mb-10">
            <div class="flex-1 h-px bg-gray-300" />
            <div class="text-center px-2">
              <p class="text-xs uppercase tracking-widest text-gray-400 mb-0.5">
                Elaborados a diario
              </p>
              <h2 class="text-2xl sm:text-3xl font-bold tracking-wide">
                Helados
              </h2>
            </div>
            <div class="flex-1 h-px bg-gray-300" />
          </div>

          {/* ── Para llevar – framed menu insert ── */}
          <div class="mb-10 max-w-2xl mx-auto border-2 border-gray-800">
            <div class="bg-gray-800 px-6 py-2.5 text-center">
              <p class="text-white text-xs font-bold uppercase tracking-widest">
                Para Llevar · Hasta 3 sabores
              </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {ices.precios.map((grupo: PrecioGrupo) => (
                <div key={grupo.title} class="px-6 py-5">
                  <p class="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">
                    {grupo.title}
                  </p>
                  <ul class="space-y-3">
                    {grupo.items.map((p: PrecioItem) => (
                      <li key={p.name} class="flex items-end gap-1">
                        <span class="text-gray-700 text-sm pb-0.5">
                          {p.name}
                        </span>
                        <span class="flex-1 border-b border-dotted border-gray-300 mb-1" />
                        <span class="text-gray-900 font-bold tabular-nums pb-0.5">
                          {p.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div class="mt-4 max-w-2xl mx-auto flex items-start gap-3 rounded-xl border border-[#F89E00]/30 bg-[#FFF8EC] px-4 py-3 mb-8">
            <ul class="text-xs text-gray-700 space-y-0.5">
              <li>
                Los helados pueden tener <strong>contaminación cruzada</strong>
                {" "}
                con alérgenos.
              </li>
              <li>
                Disponemos de <strong>sabores fuera de carta</strong>{" "}
                — consúltanos.
              </li>
              <li>
                No disponemos de <strong>servicio de terraza</strong>
              </li>
            </ul>
          </div>

          <FilterIce start={ices.ices} />
        </section>

        {/* ── Granizados ── */}
        <section class="section-anchor mb-4" id="granizado">
          <div class="flex items-center gap-4 mb-10">
            <div class="flex-1 h-px bg-gray-300" />
            <div class="text-center px-2">
              <p class="text-xs uppercase tracking-widest text-gray-400 mb-0.5">
                Refrescantes
              </p>
              <h2 class="text-2xl sm:text-3xl font-bold tracking-wide">
                Granizados & Bebidas
              </h2>
            </div>
            <div class="flex-1 h-px bg-gray-300" />
          </div>

          {/* ── Tabla de precios granizados / batidos ── */}
          <div class="mb-10 max-w-2xl mx-auto border-2 border-gray-800">
            <div class="bg-gray-800 px-6 py-2.5 text-center">
              <p class="text-white text-xs font-bold uppercase tracking-widest">
                Tarifas
              </p>
            </div>
            <div class="grid grid-cols-2 divide-x divide-gray-200">
              {ices.granizadoPrecios.map((grupo: PrecioGrupo) => (
                <div key={grupo.title} class="px-6 py-5">
                  <p class="text-center text-xs uppercase tracking-widest text-gray-400 mb-4">
                    {grupo.title}
                  </p>
                  <ul class="space-y-3">
                    {grupo.items.map((p: PrecioItem) => (
                      <li key={p.name} class="flex items-end gap-1">
                        <span class="text-gray-700 text-sm pb-0.5">
                          {p.name}
                        </span>
                        <span class="flex-1 border-b border-dotted border-gray-300 mb-1" />
                        <span class="text-gray-900 font-bold tabular-nums pb-0.5">
                          {p.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <Copas
            granizados={ices.granizados ?? []}
            tarrinas={ices.tarrinas ?? []}
          />
        </section>

        <Footer />
      </main>
    </>
  );
}
