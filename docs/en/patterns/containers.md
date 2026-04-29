# Containers

Container patterns cover chest-like screens, pocket containers, custom inventory grids, and UI that behaves like a storage panel.

<img class="jsonui-diagram" src="/assets/diagrams/container-grid.svg" alt="Container grid layout">

## Typical Structure

```text
container shell
  title/header
  item grid
  detail panel
  action buttons
```

The item grid should be regular. Use one cell size and one gap value unless the design has a strong reason to break the grid.

## Chest-Like Forms

Chest-style server forms often route through special chest or furnace form files. The server-side trigger must match the resource-pack route. Document the token or form type that activates the custom container.

## Pocket Containers

Pocket or mobile layouts need larger touch targets. Keep controls near the center and avoid tiny side buttons.

## Scrolling Containers

For long lists, use a scroll panel around the collection region, not around the whole shell.

```text
fixed shell
  fixed header
  scroll body
    item collection
  fixed footer
```

## Common Mistake

Do not place UI cards inside multiple nested decorative cards. Use one shell, one content region, and one repeated item template.
