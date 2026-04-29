# Progress Bars

Progress bars in JSON UI are usually built from a frame, a clipping panel, and a fill image.

<img class="jsonui-diagram" src="/assets/diagrams/progress-clip.svg" alt="Progress bar clipping pattern">

## Clip-Based Bar

The most stable pattern:

```text
bar_frame
  clip_panel     <- width represents progress
    fill_image   <- larger or full-width texture
```

The frame stays fixed. Only the clipping panel changes visible width.

A copy-ready clip bar snippet is included in [Code Examples](../examples/index.md#progress-bar).

## Data Sources

A progress bar can be driven by:

- scoreboard value exposed to HUD
- title/actionbar payload
- `#form_text` payload in a server form
- custom form text
- animation-only loading state

## Server Form Progress

For server forms, the server can encode a progress value into the body text.

```text
progress:75|Mining Level
```

JSON UI parses the value and adjusts the visible width or chooses a preset segment. For simple menus, segment presets are easier than trying to compute arbitrary pixel widths.

## Animated Loading Bar

When there is no real value, use an indeterminate animation:

```json
{
  "anim_type": "offset",
  "duration": 1.2,
  "from": [-80, 0],
  "to": [220, 0],
  "play_event": "always",
  "loop": true
}
```

Use this for loading or waiting, not for actual progress.

## Icon Progress

Heart-like or hunger-like progress bars are usually repeated icons with visibility conditions per segment.

```text
segment 1 visible when value >= 1
segment 2 visible when value >= 2
segment 3 visible when value >= 3
```

This is more predictable than stretching an icon texture.

## Debugging

If the bar is invisible:

1. Check the frame and fill textures separately.
2. Temporarily disable clipping.
3. Print the raw value in a debug label.
4. Confirm the parent panel has non-zero size.
