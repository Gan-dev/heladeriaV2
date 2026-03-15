import type { Granizado, Tarrina } from "../utils/getHelados.ts";

interface CopasProps {
  granizados: Granizado[];
  tarrinas: Tarrina[];
}

function MenuCard(
  props: {
    name: string;
    img: string;
    price?: string;
    folder: string;
    desc?: string;
  },
) {
  const { name, img, price, folder, desc } = props;
  const src = "./dist/img/" + folder + "/" + img + ".png";
  return (
    <article class="group flex flex-col items-center bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div class="w-full bg-gray-50 flex items-center justify-center p-3 sm:p-4 h-36 sm:h-44">
        <img
          src={src}
          alt={name}
          loading="lazy"
          class="max-h-28 sm:max-h-36 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div class="w-full px-3 py-3 text-center border-t border-gray-100">
        <p class="font-semibold text-gray-800 text-sm leading-tight">{name}</p>
        {desc && <p class="text-xs text-gray-400 mt-0.5">{desc}</p>}
        {price && <p class="mt-1 font-bold text-gray-900 text-base">{price}</p>}
      </div>
    </article>
  );
}

export function Copas({ granizados = [], tarrinas = [] }: CopasProps) {
  return (
    <>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {granizados.map((item) => (
          <MenuCard
            key={item.name}
            name={item.name}
            img={item.img}
            folder="hail"
          />
        ))}
      </div>

      <div class="mt-12">
        <div class="flex items-center gap-4 mb-8">
          <div class="flex-1 h-px bg-gray-300" />
          <div class="text-center px-2">
            <p class="text-xs uppercase tracking-widest text-gray-400 mb-0.5">
              Hasta 3 sabores
            </p>
            <h3 class="text-xl font-bold tracking-wide">Para Llevar</h3>
          </div>
          <div class="flex-1 h-px bg-gray-300" />
        </div>
        <div class="grid grid-cols-2 gap-6 max-w-md mx-auto">
          {tarrinas.map((item) => (
            <MenuCard
              key={item.name}
              name={item.name}
              img={item.img}
              price={item.price}
              desc={item.desc}
              folder="tarrinas"
            />
          ))}
        </div>
      </div>
    </>
  );
}
