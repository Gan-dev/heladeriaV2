import { Head } from "$fresh/runtime.ts";
import { Footer } from "../components/Footer.tsx";
import NavBar from "../islands/NavBar.tsx";

export default function PoliticaPrivacidad() {
  return (
    <>
      <Head>
        <title>Política de Privacidad | Heladería Roma</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <NavBar />

      <main class="max-w-3xl mx-auto px-4 sm:px-6 py-16 text-gray-800">
        <h1 class="text-3xl font-extrabold mb-2 text-gray-900">
          Política de Privacidad
        </h1>
        <p class="text-sm text-gray-400 mb-8">
          Última actualización: 19 de marzo de 2026
        </p>

        <p class="text-sm leading-relaxed text-gray-600 mb-8">
          En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y
          del Consejo (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de
          Protección de Datos Personales y garantía de los derechos digitales
          (LOPD-GDD), le informamos de la presente política de privacidad.
        </p>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">1. Responsable del tratamiento</h2>
          <ul class="space-y-1 text-sm text-gray-600 list-disc list-inside">
            <li>
              <strong>Identidad:</strong> Heladería Roma
            </li>
            <li>
              <strong>NIF/CIF:</strong> [NIF del titular]
            </li>
            <li>
              <strong>Dirección:</strong> [Dirección completa], Madrid, España
            </li>
            <li>
              <strong>Correo de contacto:</strong> [correo@heladeria-roma.es]
            </li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            2. Finalidades y base jurídica del tratamiento
          </h2>
          <p class="text-sm leading-relaxed text-gray-600 mb-3">
            Los datos personales que pudieran recabarse a través del sitio web
            se tratan con las siguientes finalidades y bases jurídicas:
          </p>
          <div class="overflow-x-auto">
            <table class="w-full text-xs text-gray-600 border-collapse">
              <thead>
                <tr class="bg-gray-100 text-gray-700 uppercase text-left">
                  <th class="px-3 py-2 border border-gray-200">Finalidad</th>
                  <th class="px-3 py-2 border border-gray-200">
                    Base jurídica
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="px-3 py-2 border border-gray-200">
                    Gestión de consultas y solicitudes de información
                  </td>
                  <td class="px-3 py-2 border border-gray-200">
                    Interés legítimo / consentimiento del interesado (art. 6.1.a
                    y f RGPD)
                  </td>
                </tr>
                <tr class="bg-gray-50">
                  <td class="px-3 py-2 border border-gray-200">
                    Envío de comunicaciones comerciales (si se solicita)
                  </td>
                  <td class="px-3 py-2 border border-gray-200">
                    Consentimiento del interesado (art. 6.1.a RGPD)
                  </td>
                </tr>
                <tr>
                  <td class="px-3 py-2 border border-gray-200">
                    Análisis estadístico del uso del sitio web mediante cookies
                  </td>
                  <td class="px-3 py-2 border border-gray-200">
                    Consentimiento del interesado (art. 6.1.a RGPD)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">3. Datos recabados</h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Este sitio web tiene carácter meramente informativo y no dispone de
            formularios de registro ni de comercio electrónico. Los únicos datos
            que puede recopilar son los necesarios para el funcionamiento
            técnico del servidor (dirección IP, navegador) y los derivados del
            uso de cookies, conforme a lo indicado en la{" "}
            <a href="/politica-cookies" class="text-orange-500 hover:underline">
              Política de Cookies
            </a>
            .
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">4. Plazo de conservación</h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Los datos se conservarán durante el tiempo estrictamente necesario
            para cumplir la finalidad para la que fueron recabados y, en todo
            caso, durante los plazos legales de prescripción que correspondan.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">
            5. Destinatarios y transferencias internacionales
          </h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Los datos no se cederán a terceros salvo obligación legal. En caso
            de utilizar proveedores de servicios fuera del Espacio Económico
            Europeo, se garantizarán las salvaguardas adecuadas conforme al
            capítulo V del RGPD.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">6. Derechos del interesado</h2>
          <p class="text-sm leading-relaxed text-gray-600 mb-3">
            Puede ejercer en cualquier momento los siguientes derechos ante el
            Responsable del tratamiento, enviando un escrito a
            [correo@heladeria-roma.es] junto con copia de su documento de
            identidad:
          </p>
          <ul class="space-y-1 text-sm text-gray-600 list-disc list-inside">
            <li>Acceso a sus datos personales</li>
            <li>Rectificación de datos inexactos</li>
            <li>Supresión («derecho al olvido»)</li>
            <li>Limitación del tratamiento</li>
            <li>Portabilidad de los datos</li>
            <li>Oposición al tratamiento</li>
            <li>
              Retirada del consentimiento en cualquier momento, sin afectar a la
              licitud del tratamiento previo
            </li>
          </ul>
          <p class="text-sm leading-relaxed text-gray-600 mt-3">
            Asimismo, tiene derecho a presentar una reclamación ante la Agencia
            Española de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              class="text-orange-500 hover:underline"
            >
              www.aepd.es
            </a>
            ).
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">7. Seguridad</h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Heladería Roma aplica las medidas técnicas y organizativas
            necesarias para garantizar la seguridad de los datos personales y
            evitar su alteración, pérdida, tratamiento o acceso no autorizados,
            conforme a lo establecido en el RGPD y la LOPD-GDD.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold mb-3">8. Modificaciones</h2>
          <p class="text-sm leading-relaxed text-gray-600">
            Heladería Roma se reserva el derecho a modificar la presente
            política con objeto de adaptarla a novedades legislativas o
            jurisprudenciales. En dicho caso, se anunciará en esta página con
            antelación suficiente.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
