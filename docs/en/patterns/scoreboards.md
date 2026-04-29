# Scoreboards

Scoreboard UI is useful when the server already exposes player-specific values through Bedrock's scoreboard display pipeline.

## When To Use It

Use scoreboard-driven UI for:

- compact stat panels
- rank or currency displays
- quest counters
- server status overlays
- sidebar replacements

Do not use it for complex interactive menus. Scoreboards are good for display, not for input.

## Pattern Shape

```text
scoreboard data
        -> scoreboard screen or HUD insert
        -> label bindings
        -> styled rows, icons, and separators
```

## Design Advice

Keep scoreboard panels dense and readable. Use small icons, aligned numbers, and fixed row height. Avoid large decorative backgrounds that hide gameplay.

## Debugging

If values do not update:

1. Confirm the scoreboard value changes in-game.
2. Confirm you are modifying the correct scoreboard UI file.
3. Temporarily render raw text before styling.
4. Check whether another resource pack overrides the same screen.
