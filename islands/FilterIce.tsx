import { useMemo, useRef, useState, useEffect } from "preact/hooks";

type Ice = {
  name: string;
  allergens: boolean;
  frutosSecos: boolean;
  Huevo: boolean;
  Gluten: boolean;
  Lacteos: boolean;
  img: string;
};

interface IcesProps {
  start: Ice[];
}

type FilterState = {
  allergens: boolean;
  lacteos: boolean;
  egg: boolean;
  gluten: boolean;
  nuts: boolean;
};

const defaultFilters: FilterState = {
  allergens: false,
  lacteos: false,
  egg: false,
  gluten: false,
  nuts: false,
};

type Allergen = { key: keyof Ice; label: string; img: string };

const ALLERGENS: Allergen[] = [
  { key: "Huevo",       label: "Huevo",        img: "./dist/img/allergens/Egg.svg" },
  { key: "frutosSecos", label: "Frutos secos",  img: "./dist/img/allergens/nuts.svg" },
  { key: "Gluten",      label: "Gluten",        img: "./dist/img/allergens/Gluten.svg" },
  { key: "Lacteos",     label: "Lácteos",       img: "./dist/img/allergens/Lacteos.svg" },
];

const FILTER_CONFIG: Array<{ key: keyof FilterState; label: string; icon: string }> = [
  { key: "allergens", label: "Sin alérgenos",    icon: "✓" },
  { key: "lacteos",   label: "Sin lácteos",      icon: "🥛" },
  { key: "egg",       label: "Sin huevo",        icon: "🥚" },
  { key: "gluten",    label: "Sin gluten",       icon: "🌾" },
  { key: "nuts",      label: "Sin frutos secos", icon: "🥜" },
];

// ── Modal de detalle ────────────────────────────────────────────────────────
function IceModal({ ice, onClose }: { ice: Ice; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    globalThis.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      globalThis.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, []);

  const activeAllergens = ALLERGENS.filter((a) => ice[a.key] as boolean);

  return (
    <div
      class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm sm:p-4"
      onClick={onClose}
    >
      <div
        class="animate-slideUp relative w-full sm:max-w-sm bg-white sm:rounded-2xl rounded-t-3xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div class="sm:hidden flex justify-center pt-3 pb-1">
          <div class="w-10 h-1 rounded-full bg-gray-300" />
        </div>
        <button
          type="button"
          onClick={onClose}
          class="absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-2xl leading-none font-bold z-10"
          aria-label="Cerrar"
        >×</button>

        <div class="bg-gray-50 flex items-center justify-center h-52">
          <img
            src={"./dist/img/icecream/" + ice.img + ".png"}
            alt={ice.name}
            class="max-h-44 object-contain"
          />
        </div>

        <div class="px-6 py-5">
          <h3 class="text-xl font-bold text-gray-900 mb-2">{ice.name}</h3>

          {!ice.allergens && (
            <span class="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-1 mb-3">
              ✓ Sin alérgenos
            </span>
          )}

          {activeAllergens.length > 0 ? (
            <div>
              <p class="text-sm text-gray-500 font-medium mb-3">Contiene alérgenos:</p>
              <div class="grid grid-cols-4 gap-3">
                {activeAllergens.map((a) => (
                  <div key={a.key as string} class="flex flex-col items-center gap-1.5">
                    <div class="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center border border-orange-100">
                      <img src={a.img} alt={a.label} class="w-10 h-10" />
                    </div>
                    <span class="text-xs text-gray-600 text-center font-medium leading-tight">{a.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p class="text-sm text-gray-400">No contiene alérgenos declarados.</p>
          )}

          <button
            type="button"
            onClick={onClose}
            class="mt-5 w-full py-2.5 bg-gray-900 text-white rounded-xl font-semibold text-sm hover:bg-gray-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Card de helado ─────────────────────────────────────────────────────────
function IceCard({ item, onOpen }: { item: Ice; onOpen: (i: Ice) => void }) {
  const activeAllergens = ALLERGENS.filter((a) => item[a.key] as boolean);
  const noAllergens = !item.allergens;

  return (
    <article
      class={"group flex flex-col items-center bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer active:scale-95" +
        (noAllergens ? " ring-2 ring-green-400" : "")}
      onClick={() => onOpen(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onOpen(item); }}
      aria-label={"Ver detalle de " + item.name}
    >
      <div class="w-full bg-gray-50 flex items-center justify-center p-3 h-36 sm:h-44">
        <img
          src={"./dist/img/icecream/" + item.img + ".png"}
          loading="lazy"
          alt={item.name}
          class="max-h-28 sm:max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div class="w-full px-2 pt-2 pb-2 text-center border-t border-gray-100 flex-1 flex flex-col justify-between gap-1">
        <p class="font-semibold text-gray-800 text-xs leading-tight">{item.name}</p>

        {activeAllergens.length > 0 ? (
          <div class="flex justify-center gap-1.5 flex-wrap mt-1">
            {activeAllergens.map((a) => (
              <img
                key={a.key as string}
                src={a.img}
                alt={a.label}
                title={a.label}
                class="w-6 h-6 sm:w-7 sm:h-7 opacity-80"
                loading="lazy"
              />
            ))}
          </div>
        ) : (
          <span class="text-xs text-green-600 font-semibold mt-0.5">Sin alérgenos ✓</span>
        )}

        <p class="text-gray-300 text-[10px] mt-0.5 sm:hidden">Toca para ver más</p>
      </div>
    </article>
  );
}

// ── Componente principal ───────────────────────────────────────────────────
export default function FilterIce(props: IcesProps) {
  const [filter, setFilter] = useState<FilterState>(defaultFilters);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Ice | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredIces = useMemo(() => {
    const q = search.trim().toLowerCase();
    return props.start.filter((item) => {
      if (q && !item.name.toLowerCase().includes(q)) return false;
      if (filter.allergens && item.allergens) return false;
      if (filter.lacteos && item.Lacteos) return false;
      if (filter.egg && item.Huevo) return false;
      if (filter.gluten && item.Gluten) return false;
      if (filter.nuts && item.frutosSecos) return false;
      return true;
    });
  }, [props.start, filter, search]);

  const toggleFilter = (id: keyof FilterState) =>
    setFilter((prev) => ({ ...prev, [id]: !prev[id] }));

  const anyActive = Object.values(filter).some(Boolean) || search.trim() !== "";
  const resetAll = () => { setFilter(defaultFilters); setSearch(""); };

  return (
    <>
      {/* Buscador */}
      <div class="relative max-w-md mx-auto mb-4">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none">🔍</span>
        <input
          ref={searchRef}
          type="search"
          placeholder="Buscar helado..."
          value={search}
          onInput={(e) => setSearch((e.target as HTMLInputElement).value)}
          class="w-full pl-11 pr-10 py-3 rounded-2xl border border-gray-300 focus:border-gray-600 outline-none text-sm bg-white shadow-sm"
        />
        {search && (
          <button
            type="button"
            onClick={() => { setSearch(""); searchRef.current?.focus(); }}
            class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 text-xl"
            aria-label="Limpiar búsqueda"
          >×</button>
        )}
      </div>

      {/* Filtros pill */}
      <div class="flex flex-wrap justify-center gap-2 mb-3">
        {FILTER_CONFIG.map((item) => (
          <label
            key={item.key}
            class={"inline-flex items-center gap-1.5 px-4 py-2 rounded-full border cursor-pointer text-sm font-medium transition-all duration-200 select-none " +
              (filter[item.key]
                ? "bg-gray-900 text-white border-gray-900 shadow-md"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-500")}
          >
            <input type="checkbox" class="hidden" checked={filter[item.key]} onChange={() => toggleFilter(item.key)} />
            <span>{item.icon}</span>{item.label}
          </label>
        ))}
      </div>

      {/* Contador + reset */}
      <div class="flex items-center justify-center gap-3 my-4">
        <p class="text-sm font-semibold text-gray-600">
          {filteredIces.length === props.start.length
            ? <span><b class="text-gray-900">{filteredIces.length}</b> helados disponibles</span>
            : <span><b class="text-gray-900">{filteredIces.length}</b> de {props.start.length} helados</span>}
        </p>
        {anyActive && (
          <button
            type="button"
            onClick={resetAll}
            class="text-xs text-gray-400 underline underline-offset-2 hover:text-gray-800 transition-colors"
          >
            Limpiar filtros
          </button>
        )}
      </div>

      {/* Grid */}
      {filteredIces.length === 0 ? (
        <div class="text-center py-16 text-gray-400">
          <p class="text-5xl mb-4">🍦</p>
          <p class="text-lg font-semibold text-gray-500">Ningún helado coincide</p>
          <p class="text-sm mt-1">Prueba con otro término o cambia los filtros</p>
          <button type="button" onClick={resetAll} class="mt-5 px-6 py-2.5 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors">
            Ver todos
          </button>
        </div>
      ) : (
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
          {filteredIces.map((item) => (
            <IceCard key={item.name} item={item} onOpen={setSelected} />
          ))}
        </div>
      )}

      {/* Modal de detalle */}
      {selected && <IceModal ice={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
