import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function PoliticaCookies() {
  return (
    <>
      <Head>
        <title>Política de Cookies | Heladería Roma</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <NavBar />

      <main class="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
        <h1 class="text-3xl font-extrabold mb-2 text-gray-900">
          Política de Cookies
        </h1>
        <p class="text-sm text-gray-400 mb-8">
          Última actualización: 19 de marzo de 2026
        </p>

        <p class="text-sm leading-relaxed text-gray-600 mb-8">
          En cumplimiento de lo establecido en el artículo 22.2 de la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
          y de Comercio Electrónico (LSSI-CE), modificada por el Real
          Decreto-ley 13/2012, y en el Reglamento (UE) 2016/679 (RGPD), le
          informamos sobre el uso de cookies en este sitio web.
        </p>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">1. ¿Qué es una cookie?</h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Una cookie es un pequeño fichero de texto que se descarga y almacena
            en el dispositivo del usuario cuando accede a un sitio web. Las
            cookies permiten al sitio recordar sus acciones y preferencias
            durante un período de tiempo, de modo que el usuario no tenga que
            volver a configurarlas cada vez que visite la página o navegue de
            una página a otra.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">2. Tipos de cookies utilizadas</h2>
          <p class="text-sm leading-relaxed text-gray-600 mb-4">
            Este sitio web puede utilizar las siguientes categorías de cookies:
          </p>

          <div class="space-y-4">
            <div class="border border-gray-200 rounded-lg p-4">
              <h3 class="text-sm font-semibold text-gray-800 mb-1">
                a) Cookies técnicas o estrictamente necesarias
              </h3>
              <p class="text-xs text-gray-500 mb-2">
                Base jurídica: art. 22.2 LSSI-CE (exceptuadas del
                consentimiento)
              </p>
              <p class="text-sm text-gray-600">
                Son imprescindibles para el correcto funcionamiento del sitio
                web. Permiten al usuario navegar por la página y utilizar sus
                funcionalidades básicas. Sin estas cookies, algunos servicios no
                estarían disponibles.
              </p>
              <div class="mt-3 overflow-x-auto">
                <table class="w-full text-xs text-gray-600 border-collapse">
                  <thead>
                    <tr class="bg-gray-50 text-gray-700 uppercase text-left">
                      <th class="px-2 py-2 border border-gray-200">Cookie</th>
                      <th class="px-2 py-2 border border-gray-200">
                        Finalidad
                      </th>
                      <th class="px-2 py-2 border border-gray-200">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 border border-gray-200 font-mono">
                        __session
                      </td>
                      <td class="px-2 py-2 border border-gray-200">
                        Gestión de sesión del servidor
                      </td>
                      <td class="px-2 py-2 border border-gray-200">Sesión</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg p-4">
              <h3 class="text-sm font-semibold text-gray-800 mb-1">
                b) Cookies analíticas
              </h3>
              <p class="text-xs text-gray-500 mb-2">
                Base jurídica: consentimiento del usuario (art. 6.1.a RGPD)
              </p>
              <p class="text-sm text-gray-600">
                Permiten cuantificar el número de visitantes y analizar
                estadísticamente cómo los usuarios navegan por el sitio, con el
                fin de mejorar los contenidos y servicios ofrecidos. Los datos
                recabados son anónimos y no permiten identificar a los usuarios
                de forma individual.
              </p>
              <div class="mt-3 overflow-x-auto">
                <table class="w-full text-xs text-gray-600 border-collapse">
                  <thead>
                    <tr class="bg-gray-50 text-gray-700 uppercase text-left">
                      <th class="px-2 py-2 border border-gray-200">Cookie</th>
                      <th class="px-2 py-2 border border-gray-200">
                        Proveedor
                      </th>
                      <th class="px-2 py-2 border border-gray-200">
                        Finalidad
                      </th>
                      <th class="px-2 py-2 border border-gray-200">Duración</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="px-2 py-2 border border-gray-200 font-mono">
                        _ga
                      </td>
                      <td class="px-2 py-2 border border-gray-200">
                        Google Analytics
                      </td>
                      <td class="px-2 py-2 border border-gray-200">
                        Identificar sesiones de usuario
                      </td>
                      <td class="px-2 py-2 border border-gray-200">2 años</td>
                    </tr>
                    <tr class="bg-gray-50">
                      <td class="px-2 py-2 border border-gray-200 font-mono">
                        _ga_*
                      </td>
                      <td class="px-2 py-2 border border-gray-200">
                        Google Analytics
                      </td>
                      <td class="px-2 py-2 border border-gray-200">
                        Mantener estado de sesión
                      </td>
                      <td class="px-2 py-2 border border-gray-200">2 años</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="border border-gray-200 rounded-lg p-4">
              <h3 class="text-sm font-semibold text-gray-800 mb-1">
                c) Cookies de preferencias o funcionalidad
              </h3>
              <p class="text-xs text-gray-500 mb-2">
                Base jurídica: consentimiento del usuario (art. 6.1.a RGPD)
              </p>
              <p class="text-sm text-gray-600">
                Permiten recordar información para que el usuario acceda al
                servicio con determinadas características que pueden diferenciar
                su experiencia (por ejemplo, el idioma o la región).
              </p>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            3. Consentimiento y gestión de preferencias
          </h2>
          <p class="text-sm leading-relaxed text-gray-600 mb-3">
            La primera vez que acceda al Sitio, se le mostrará un aviso
            informativo en el que podrá aceptar o rechazar el uso de cookies no
            técnicas. Puede modificar su consentimiento en cualquier momento a
            través de la configuración de su navegador:
          </p>
          <ul class="space-y-2 text-sm text-gray-600 list-disc list-inside">
            <li>
              <strong>Google Chrome:</strong>{" "}
              Configuración → Privacidad y seguridad → Cookies y otros datos de
              sitios
            </li>
            <li>
              <strong>Mozilla Firefox:</strong>{" "}
              Opciones → Privacidad y seguridad → Cookies y datos del sitio
            </li>
            <li>
              <strong>Microsoft Edge:</strong>{" "}
              Configuración → Cookies y permisos del sitio
            </li>
            <li>
              <strong>Safari:</strong>{" "}
              Preferencias → Privacidad → Gestionar datos del sitio web
            </li>
          </ul>
          <p class="text-sm leading-relaxed text-gray-600 mt-3">
            La desactivación de cookies no técnicas puede afectar al
            funcionamiento óptimo de algunos apartados del Sitio.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            4. Transferencias internacionales
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Algunos proveedores de cookies (como Google) pueden realizar
            transferencias de datos fuera del Espacio Económico Europeo. Dichas
            transferencias se amparan en las Cláusulas Contractuales Tipo
            aprobadas por la Comisión Europea o en mecanismos de adecuación
            equivalentes.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            5. Actualizaciones de esta política
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Heladería Roma se reserva el derecho a modificar la presente
            Política de Cookies en función de exigencias legislativas,
            jurisprudenciales o con la finalidad de adaptar dicha política a las
            instrucciones dictadas por la Agencia Española de Protección de
            Datos (AEPD). En dicho caso, publicará la nueva versión en esta
            misma página.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">6. Contacto</h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Para cualquier consulta relacionada con el uso de cookies, puede
            contactar con nosotros en{" "}
            <a
              href="mailto:correo@heladeria-roma.es"
              class="text-orange-500 hover:underline"
            >
              [correo@heladeria-roma.es]
            </a>{" "}
            o consultar nuestra{" "}
            <a
              href="/politica-privacidad"
              class="text-orange-500 hover:underline"
            >
              Política de Privacidad
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
