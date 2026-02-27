export interface Copa {
  name: string;
  price: string;
  img: string;
}

export interface PrecioItem {
  name: string;
  price: string;
}

export interface PrecioGrupo {
  title: string;
  items: PrecioItem[];
}

export interface IceItem {
  name: string;
  allergens: boolean;
  frutosSecos: boolean;
  Huevo: boolean;
  Gluten: boolean;
  Lacteos: boolean;
  img: string;
}

export interface Granizado {
  name: string;
  img: string;
  price: string;
}

export interface Tarrina {
  name: string;
  img: string;
  price: string;
  desc: string;
}

export interface HeladosData {
  copas: Copa[];
  precios: PrecioGrupo[];
  ices: IceItem[];
  granizados: Granizado[];
  tarrinas: Tarrina[];
}

export async function getIces(): Promise<HeladosData> {
  const data = await Deno.readTextFile("./content/index.json");
  return JSON.parse(data);
}
