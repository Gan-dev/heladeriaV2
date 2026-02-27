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
        `}
        </style>
      </Head>

      <NavBar />

      <main class="section-menu-card px-4 sm:px-6">
        {/* Quick-nav pills */}
        <div class="flex flex-wrap gap-3 justify-center py-6">
          <a
            href="#copas"
            class="px-5 py-2 rounded-full border-2 border-gray-800 text-gray-800 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-colors"
          >
            🍨 Copas
          </a>
          <a
            href="#icecream"
            class="px-5 py-2 rounded-full border-2 border-gray-800 text-gray-800 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-colors"
          >
            🍦 Helados
          </a>
          <a
            href="#granizado"
            class="px-5 py-2 rounded-full border-2 border-gray-800 text-gray-800 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-colors"
          >
            🧊 Granizados
          </a>
        </div>

        {/* ── Copas ── */}
        <section class="section-anchor mb-12" id="copas">
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold mb-1">Nuestras Copas</h2>
            <p class="text-gray-500 text-sm">
              Elaboradas artesanalmente cada día
            </p>
            <div class="w-16 h-1 bg-gray-800 rounded mx-auto mt-3" />
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {ices.copas.map((item: Copa) => (
              <article
                class="group flex flex-col items-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                key={item.name}
              >
                <div class="w-full bg-gray-50 flex items-center justify-center p-4 h-48">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    class="max-h-40 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div class="w-full px-3 py-3 text-center border-t border-gray-100">
                  <p class="font-semibold text-gray-800 text-sm leading-tight">
                    {item.name}
                  </p>
                  <p class="mt-1 font-bold text-gray-900 text-base">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Helados con filtro ── */}
        <section class="section-anchor mb-12" id="icecream">
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold mb-1">
              Nuestros Helados
            </h2>
            <p class="text-gray-500 text-sm">Filtra según tus necesidades</p>
            <div class="w-16 h-1 bg-gray-800 rounded mx-auto mt-3" />
          </div>

          {/* ── Banner para llevar ── */}
          <div class="mb-8 max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-orange-200">
            {/* Header */}
            <div class="bg-orange-500 px-6 py-5 flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl shrink-0">
                  🛍️
                </div>
                <div>
                  <p class="text-white font-extrabold text-lg leading-tight">
                    Para Llevar
                  </p>
                  <p class="text-orange-100 text-xs mt-0.5">
                    Hasta 3 sabores · Precios orientativos
                  </p>
                </div>
              </div>
              <span class="hidden sm:block text-white text-xs font-semibold uppercase tracking-widest border border-white/40 rounded-full px-3 py-1">
                Artesanal
              </span>
            </div>
            {/* Price columns */}
            <div class="bg-orange-50 grid grid-cols-1 sm:grid-cols-2">
              {ices.precios.map((grupo: PrecioGrupo, gi: number) => (
                <div
                  key={grupo.title}
                  class={`px-6 py-5 ${
                    gi === 0 ? "sm:border-r border-orange-200" : ""
                  }`}
                >
                  <p class="text-orange-600 text-xs font-bold uppercase tracking-wide mb-3 leading-snug">
                    {grupo.title}
                  </p>
                  <ul class="space-y-2">
                    {grupo.items.map((p: PrecioItem, idx: number) => (
                      <li
                        key={p.name}
                        class={`flex items-center justify-between ${
                          idx < grupo.items.length - 1
                            ? "pb-2 border-b border-orange-200"
                            : ""
                        }`}
                      >
                        <span class="text-gray-700 text-sm">{p.name}</span>
                        <span class="text-gray-900 font-bold text-base tabular-nums ml-4">
                          {p.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <FilterIce start={ices.ices} />
        </section>

        {/* ── Granizados ── */}
        <section class="section-anchor mb-4" id="granizado">
          <div class="text-center mb-8">
            <h2 class="text-2xl sm:text-3xl font-bold mb-1">
              Granizados & Horchata
            </h2>
            <div class="w-16 h-1 bg-gray-800 rounded mx-auto mt-3" />
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
