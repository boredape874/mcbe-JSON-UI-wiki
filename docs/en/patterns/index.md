# Pattern Compendium

This section collects reusable Minecraft Bedrock JSON UI patterns. These are not full copy-paste packs. They are implementation shapes you adapt to your own namespace, textures, and form contract.

Recommended reading order:

1. [Custom Toggles](./custom-toggles.md)
2. [Animation Events](./animation-events.md)
3. [Progress Bars](./progress-bars.md)
4. [Carousels](./carousels.md)
5. [Text Payloads](./text-payloads.md)

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
