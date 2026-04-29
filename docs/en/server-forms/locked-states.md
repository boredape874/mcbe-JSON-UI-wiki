# Locked States

Locked states are common in trait trees, shops, quests, rewards, kits, and admin panels.

The important rule:

> JSON UI may show the lock, but the server must enforce the lock.

## Recommended Flow

```text
server sends form with all nodes
        -> JSON UI draws node icons
        -> locked nodes get a lock overlay
        -> player clicks a node
        -> server checks unlock state
        -> server accepts, rejects, or refreshes the form
```

## Button Index Stability

Do not remove locked buttons from the collection unless you are ready to remap every index.

Better:

- keep the button index
- show a lock overlay
- optionally dim the icon
- let the server reject the click

## Payload Pattern

The server can encode state in the title, body, or button text if the UI needs to show it.

```text
button 7 text: trait:combat_crit|locked|Critical Strike
button 8 text: trait:combat_speed|unlocked|Rush
```

The UI can parse or route based on markers, while the server still owns the real unlock state.

## Visual Pattern

A locked node usually has:

- base slot texture
- icon texture
- dark overlay
- lock icon
- optional requirement label

Use a texture for the lock icon and complex shadows. Use JSON controls for state, position, and visibility.

## Common Mistake

Do not rely on hiding the button as security. A hidden or disabled-looking UI element is not a permission system. Always check state on the server response handler.
