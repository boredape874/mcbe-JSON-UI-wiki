# Compendio de patrones

Esta sección reúne patrones reutilizables de Minecraft Bedrock JSON UI. No son packs completos para copiar y pegar; son estructuras de implementación que debes adaptar a tu namespace, texturas y contrato del servidor.

<img class="jsonui-diagram" src="/assets/diagrams/pattern-map.svg" alt="Mapa de patrones de JSON UI">

Orden recomendado:

1. [Toggles personalizados](./custom-toggles.md)
2. [Eventos de animación](./animation-events.md)
3. [Barras de progreso](./progress-bars.md)
4. [Carruseles](./carousels.md)
5. [Payloads de texto](./text-payloads.md)
6. [Scoreboards](./scoreboards.md)
7. [Contenedores](./containers.md)
8. [HUD por protocolo](./protocol-hud.md)
9. [Suites de forms especiales](./special-form-suites.md)

## Regla general

JSON UI funciona mejor cuando cada patrón tiene un dueño claro del estado y un dueño claro de lo visual.

| Patrón | Dueño del estado | Dueño visual |
| --- | --- | --- |
| Toggle | toggle real o estado del servidor | controles checked/unchecked |
| Barra de progreso | scoreboard, title, form text, servidor | panel de clip e imagen fill |
| Carrusel | cycler, toggles ocultos o ruta del servidor | wrappers estables de tarjetas |
| Payload de texto | protocolo de mensajes del servidor | bindings y labels |
| Animación | evento de botón o transición de estado | wrapper animado estable |

Si mezclas estado y visuales sin una estructura clara, la UI puede funcionar una vez y luego dejar de repetir animaciones correctamente.

## Familias cubiertas

- Server forms: rutas, búsqueda, botones, bloqueos y shells
- HUD y chat: protocolos por title/actionbar, filtros de chat, scoreboards
- Contenedores: grids tipo chest, pocket containers, panels con scroll
- Movimiento: toggles, eventos de animación, barras de progreso, carruseles
- Pulido visual: shells con texturas, frames de hover, tooltips, hotbar
- Lógica de texto: payloads, slicing, valores de ancho fijo, marcadores
