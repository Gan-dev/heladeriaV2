# HeladeriaV2

Aplicacion web de heladeria construida con **Deno + Fresh + Preact**.

## Requisitos

- Deno instalado (recomendado: `2.2.x` o superior)

Verificar instalacion:

```bash
deno --version
```

## Inicializar el proyecto

Desde la raiz del repo:

```bash
deno task start
```

La app levanta en `http://localhost:8000` y queda en modo watch.

## Scripts disponibles

- `deno task start`: inicia el servidor de desarrollo.

Listar tareas:

```bash
deno task
```

## Estructura principal

- `routes/`: paginas y rutas Fresh.
- `islands/`: componentes interactivos en cliente.
- `components/`: componentes compartidos.
- `content/index.json`: datos del catalogo.
- `main.ts`: arranque del servidor.
- `dev.ts`: modo desarrollo.

## Problema comun (lockfile)

Si aparece un error de integridad como:

`Integrity check failed for remote specifier`

regenera el lockfile:

```bash
deno task start --reload --lock-write
```

Si persiste, elimina `deno.lock` y vuelve a ejecutar:

```bash
deno task start --reload --lock-write
```
