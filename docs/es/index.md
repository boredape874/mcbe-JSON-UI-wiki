# Wiki MCBE JSON UI

Esta wiki ensena Minecraft Bedrock JSON UI desde cero.

Empieza aqui:

1. [Que Es JSON UI?](./guide/what-is-json-ui.md)
2. [Flujo Del Resource Pack](./guide/resource-pack-flow.md)
3. [Primer Archivo UI](./guide/first-ui-file.md)
4. [Server Forms](./server-forms/index.md)

JSON UI no es una interfaz web. Es un sistema del cliente Bedrock que lee archivos JSON dentro de un resource pack y crea pantallas con arboles de controles.

Si haces servidores con PMMP o scripts de behavior pack, empieza por los server forms. Muchos menus personalizados entran por `server_form.json`, y desde ahi la UI puede leer titulo, texto, botones y campos enviados por el servidor.

<img class="jsonui-diagram" src="/assets/diagrams/load-flow.svg" alt="Flujo de carga de JSON UI">
