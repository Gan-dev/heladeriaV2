import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function AvisoLegal() {
  return (
    <>
      <Head>
        <title>Aviso Legal | Heladería Roma</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <NavBar />

      <main class="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
        <h1 class="text-3xl font-extrabold mb-2 text-gray-900">Aviso Legal</h1>
        <p class="text-sm text-gray-400 mb-8">
          Última actualización: 19 de marzo de 2026
        </p>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            1. Datos identificativos del titular
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE), se facilitan los siguientes datos de
            identificación:
          </p>
          <ul class="mt-3 space-y-1 text-sm text-gray-600 list-disc list-inside">
            <li>
              <strong>Denominación social:</strong> Heladería Roma
            </li>
            <li>
              <strong>NIF/CIF:</strong> [NIF del titular]
            </li>
            <li>
              <strong>Domicilio:</strong> [Dirección completa], Madrid, España
            </li>
            <li>
              <strong>Teléfono:</strong> +34 000 000 000
            </li>
            <li>
              <strong>Correo electrónico:</strong> [correo@heladeria-roma.es]
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            2. Objeto y ámbito de aplicación
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            El presente Aviso Legal regula el acceso y uso del sitio web de
            Heladería Roma (en adelante, «el Sitio»), cuya finalidad es la
            presentación de los productos y servicios ofrecidos por el
            establecimiento. El acceso al Sitio implica la aceptación plena de
            las presentes condiciones.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            3. Propiedad intelectual e industrial
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Todos los contenidos del Sitio (textos, imágenes, logotipos, diseño
            gráfico, código fuente, etc.) son titularidad de Heladería Roma o de
            terceros que han autorizado su uso, y están protegidos por la
            normativa española e internacional sobre propiedad intelectual e
            industrial. Queda expresamente prohibida su reproducción,
            distribución, comunicación pública o transformación sin autorización
            escrita del titular.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            4. Exclusión de garantías y responsabilidad
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Heladería Roma no garantiza la disponibilidad continua ni la
            ausencia de errores en el Sitio. En la medida permitida por la ley,
            queda excluida toda responsabilidad por daños derivados del uso o
            imposibilidad de uso del Sitio, de la falta de veracidad, exactitud,
            exhaustividad o actualidad de los contenidos, o de virus y otros
            elementos tecnológicos dañinos.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">5. Enlaces a terceros</h2>
          <p class="text-sm leading-relaxed text-gray-600">
            El Sitio puede contener enlaces a páginas web de terceros. Heladería
            Roma no se responsabiliza del contenido ni de la política de
            privacidad de dichos sitios y recomienda consultar sus respectivos
            avisos legales.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            6. Legislación aplicable y jurisdicción
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Las presentes condiciones se rigen por la legislación española
            vigente. Para la resolución de cualquier controversia derivada del
            acceso o uso del Sitio, las partes se someten, con renuncia a
            cualquier otro fuero, a los Juzgados y Tribunales de Madrid
            (España), salvo que la normativa de protección de consumidores
            establezca otro fuero.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
