# Server Form Starter

This example is a minimal Bedrock add-on pair for learning server form JSON UI.

Copy `RP` and `BP` into a test project, enable both packs, then use a compass.

What it demonstrates:

- `RP/ui/_ui_defs.json` registers `server_form.json`.
- `RP/ui/server_form.json` replaces the default server form shell with a compact custom layout.
- `BP/scripts/main.js` opens an `ActionFormData` menu with vanilla item icons.
- Button index handling stays in script. Visual layout stays in the resource pack.

The example intentionally avoids custom texture files. It uses verified vanilla paths such as `textures/ui/Black`, `textures/items/compass`, and `textures/items/emerald`.
