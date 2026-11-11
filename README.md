# Manual de Marca — Blindaje Consular

Manual de marca básico de **Blindaje Consular**, agencia de consultoría para
procesos de visa americana B1/B2 (Bogotá, Colombia). Publicado como sitio
estático para poder consultarlo y actualizarlo con el tiempo.

🔗 **Sitio publicado:** se activa con GitHub Pages (ver abajo) en
`https://<usuario>.github.io/<repo>/`

## Contenido

El manual cubre los tres objetivos de identidad de marca de una empresa:

1. **Identidad de marca** — nombre, propósito, misión, visión, valores y
   personalidad.
2. **Identidad visual** — logotipo, paleta de colores, tipografía y recursos
   gráficos complementarios.
3. **Lineamientos de uso** — versiones del logotipo, espacio de respeto,
   tamaño mínimo y usos incorrectos.

Más una sección de **aplicaciones** con piezas ya producidas a modo de
referencia.

## Estructura

```
.
├── index.html          # contenido del manual, por secciones
├── css/style.css       # tokens de marca (color, tipografía) y estilos
├── js/script.js        # navegación (menú móvil + resaltado de sección activa)
└── assets/
    ├── logo/           # isotipo principal y sus 4 variantes de color/fondo
    └── mockups/        # piezas de aplicación ya diseñadas
```

## Cómo actualizarlo

Es HTML/CSS plano, sin paso de compilación:

- **Nuevo contenido o texto:** edita las secciones correspondientes en
  `index.html`.
- **Colores o tipografía:** cambia las variables en la parte superior de
  `css/style.css` (`:root { ... }`) — se propagan a todo el sitio.
- **Nueva pieza de aplicación:** agrega la imagen a `assets/mockups/` y un
  bloque `.application` dentro de la sección `#aplicaciones` en `index.html`.
- **Nueva variante de logotipo:** agrégala en `assets/logo/` y en la sección
  `#uso`.

Después de editar, haz commit y push a `main` — GitHub Pages republica el
sitio automáticamente en uno o dos minutos.

## Publicar en GitHub Pages (una sola vez)

1. En el repo en GitHub: **Settings → Pages**.
2. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
3. Guarda — GitHub entrega la URL pública en esa misma pantalla.
