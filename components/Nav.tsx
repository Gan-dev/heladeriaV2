export function Nav() {
  return (
    <header class="header shadow-2xl sticky top-0 z-20 bg-white/95 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <a href="/" class="logo">
          <h2 class="font-allura font-bold text-4xl md:text-6xl">
            Heladeria Roma
          </h2>
        </a>

        <nav class="flex items-center gap-4 text-sm md:text-base font-semibold">
          <a href="/" class="hover:opacity-70 transition-opacity">Inicio</a>
          <a href="/carta#icecream" class="hover:opacity-70 transition-opacity">
            Helados
          </a>
          <a href="/carta#copas" class="hover:opacity-70 transition-opacity">
            Copas
          </a>
          <a
            href="/carta#granizado"
            class="hover:opacity-70 transition-opacity"
          >
            Granizados
          </a>
        </nav>
      </div>
    </header>
  );
}
