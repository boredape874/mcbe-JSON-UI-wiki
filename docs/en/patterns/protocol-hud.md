# Protocol HUD

A protocol HUD uses server-sent text or scoreboard values as a lightweight data channel. JSON UI parses that data and updates HUD widgets.

<img class="jsonui-diagram" src="/assets/diagrams/protocol-hud.svg" alt="Protocol HUD pipeline">

## Data Sources

Common sources:

- title
- actionbar
- chat message
- scoreboard value

## Payload Rule

Keep the payload predictable.

```text
[hud]|hp=18|mana=42|zone=spawn
```

Use fixed keys. Avoid changing the key names between server versions.

## Display Rule

The raw protocol string should not be the final UI. Hide or replace it and show parsed panels instead.

## Reliability

This pattern is practical, but it is not a database. Use it for display state. Keep permissions, purchases, unlocks, and important actions server-side.

## Debugging

First show the raw payload as a label. Only add slicing, visibility, and formatting after the raw value is confirmed.
