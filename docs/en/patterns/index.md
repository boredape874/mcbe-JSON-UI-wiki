# Pattern Compendium

This section collects reusable Minecraft Bedrock JSON UI patterns. These are not full copy-paste packs. They are implementation shapes you adapt to your own namespace, textures, and form contract.

<img class="jsonui-diagram" src="/assets/diagrams/pattern-map.svg" alt="JSON UI pattern map">

Recommended reading order:

1. [Custom Toggles](./custom-toggles.md)
2. [Animation Events](./animation-events.md)
3. [Progress Bars](./progress-bars.md)
4. [Carousels](./carousels.md)
5. [Text Payloads](./text-payloads.md)
6. [Scoreboards](./scoreboards.md)
7. [Containers](./containers.md)
8. [Protocol HUD](./protocol-hud.md)
9. [Special Form Suites](./special-form-suites.md)

## Rule Of Thumb

JSON UI works best when every pattern has one clear owner:

| Pattern | State owner | Visual owner |
| --- | --- | --- |
| Toggle | real toggle or server state | checked/unchecked child controls |
| Progress bar | scoreboard/title/form text/server | clipping panel and fill image |
| Carousel | cycler, hidden toggles, or server route | stable card wrappers |
| Text payload | server message protocol | bindings and labels |
| Animation | button event or state transition | stable animated wrapper |

If state and visuals are mixed randomly, the UI will work once and then stop replaying correctly.

## Families Covered

- Server forms: routes, search, buttons, locked states, form shells
- HUD and chat: title/actionbar protocols, chat filters, scoreboards
- Containers: chest-like grids, pocket containers, custom scrolling panels
- Motion: toggles, animation events, progress bars, carousels
- Visual polish: texture-backed shells, hover frames, tooltips, hotbar layouts
- Text logic: payloads, slicing, fixed-width values, protocol markers
