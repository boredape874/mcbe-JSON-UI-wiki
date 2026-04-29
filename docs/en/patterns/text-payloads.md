# Text Payloads

Text payloads are a practical way to send small pieces of state from the server to JSON UI.

<img class="jsonui-diagram" src="/assets/diagrams/payload-pipeline.svg" alt="Text payload pipeline">

## Where Payloads Come From

Common sources:

- `#title_text`
- `#form_text`
- `#form_button_text`
- title/actionbar text
- chat text
- scoreboard values exposed by a screen

## Token Format

Use a predictable format:

```text
[shop]|coins=120|page=2
```

Keep a visible label separate from the machine-readable token when possible.

## Fixed-Width Format

For values that need slicing, fixed-width payloads are easier:

```text
HP:075MP:040XP:123
```

This avoids fragile delimiter parsing when user-facing text may contain spaces or symbols.

## Server Form Buttons

Button text can carry metadata:

```text
item|stone|price=32|name=Stone
```

The UI can show `Stone`, a price label, and a texture while the server still receives the original button index.

## Hide Protocol Messages

If using chat or actionbar as a protocol, hide the raw protocol message from the player. Only show the parsed UI.

## Safety Rule

Payloads are display data. The server must still validate permissions, prices, unlock states, and selected actions.
