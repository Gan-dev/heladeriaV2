const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer class="bg-gray-950 text-gray-300">
      {/* Main grid */}
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        {/* Brand */}
        <div class="lg:col-span-2">
          <h2
            class="text-white text-3xl font-extrabold tracking-tight mb-2"
            style="font-family: 'Allura', cursive;"
          >
            Heladería Roma
          </h2>
          <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
            Helados artesanales elaborados cada día con ingredientes frescos y
            recetas tradicionales desde 1985.
          </p>
          <div class="mt-6 space-y-2 text-sm">
            <p class="flex items-center gap-2">
              <span class="text-orange-400">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
              Tu ciudad, España
            </p>
            <p class="flex items-center gap-2">
              <span class="text-orange-400">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L8.5 10.5S9.5 13 12 15.5s5 3.5 5 3.5l1.113-1.724a1 1 0 011.21-.502l4.493 1.498A1 1 0 0121 19.72V23a2 2 0 01-2 2C7.163 25 1 18.837 1 11a2 2 0 012-2z"
                  />
                </svg>
              </span>
              +34 000 000 000
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 class="text-white text-sm font-semibold uppercase tracking-widest mb-5">
            Carta
          </h3>
          <ul class="space-y-3 text-sm">
            {[
              { label: "Inicio", href: "/" },
              { label: "Nuestras Copas", href: "/carta#copas" },
              { label: "Helados", href: "/carta#icecream" },
              { label: "Granizados", href: "/carta#granizado" },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  class="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Legal */}
        <div>
          <h3 class="text-white text-sm font-semibold uppercase tracking-widest mb-5">
            Síguenos
          </h3>
          <div class="flex gap-4 mb-8">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.563 9.877V14.89h-2.54V12h2.54v-2.194c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988A10.003 10.003 0 0022 12z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.085 1.856.6 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.856-.085 3.698-.6 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.085-1.856-.6-3.698-1.942-5.039C20.645.673 18.803.157 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X"
              class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.175 2.25h6.988l4.27 5.618 4.811-5.618zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
          <h3 class="text-white text-sm font-semibold uppercase tracking-widest mb-4">
            Legal
          </h3>
          <ul class="space-y-2 text-sm">
            {[
              { label: "Política de Cookies", href: "/politica-cookies" },
              { label: "Política de Privacidad", href: "/politica-privacidad" },
              { label: "Aviso Legal", href: "/aviso-legal" },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  class="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div class="border-t border-gray-800">
        <div class="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Heladería Roma. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a
              href="https://gan-dev.es"
              target="_blank"
              rel="noopener noreferrer"
              class="text-orange-400 hover:text-orange-300 font-medium transition-colors"
            >
              Gan-Dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
