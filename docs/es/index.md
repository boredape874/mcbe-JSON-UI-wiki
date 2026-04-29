# Wiki de MCBE JSON UI

Esta wiki explica Minecraft Bedrock JSON UI desde cero.

Si estás empezando, lee las páginas en este orden:

1. [¿Qué es JSON UI?](./guide/what-is-json-ui.md)
2. [Flujo del resource pack](./guide/resource-pack-flow.md)
3. [Primer archivo UI](./guide/first-ui-file.md)
4. [Resumen de formularios del servidor](./server-forms/index.md)
5. [Ejemplos con código](./examples/index.md)

JSON UI no es una interfaz web. Es un sistema del cliente Bedrock: el juego lee archivos JSON dentro de un resource pack y construye la pantalla a partir de un árbol de controles.

Si desarrollas servidores con PMMP o scripts de behavior pack, empieza por `server_form.json`. La mayoría de menús personalizados entran a JSON UI por esa pantalla y después enlazan título, texto, botones y campos del formulario con tu propio layout.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="Flujo de carga de JSON UI">

Si la teoría todavía se siente abstracta, abre [Ejemplos con código](./examples/index.md). Incluye un starter completo de RP/BP y snippets reutilizables para toggles, barras de progreso y botones filtrables de server form.
