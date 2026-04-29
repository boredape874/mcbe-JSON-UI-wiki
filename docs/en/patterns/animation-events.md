# Animation Events

Animations in JSON UI usually play from a named UI event. Good animation architecture keeps the event source and animated target separate.

<img class="jsonui-diagram" src="/assets/diagrams/animation-event-flow.svg" alt="Animation event flow">

## Basic Event Pattern

The input control emits a custom button event:

```json
{
  "from_button_id": "button.menu_select",
  "to_button_id": "button.panel.slide_in",
  "mapping_type": "pressed"
}
```

The animated control listens with `play_event`:

```json
{
  "anim_type": "offset",
  "duration": 0.35,
  "easing": "out_cubic",
  "from": [80, 0],
  "to": [0, 0],
  "play_event": "button.panel.slide_in",
  "resettable": true
}
```

## Stable Wrapper Rule

If a control is destroyed and recreated, event timing can become hard to reason about. Keep a stable wrapper alive and animate a child inside it.

```text
stable_panel
  motion_panel  <- anims live here
    content
```

## State Versus Motion

Do not make one event do everything if the UI is complex.

Better split:

- state event: changes selected tab or visible route
- motion event: plays transition animation

In server forms, be careful with custom mappings that accidentally submit or close the form. If in doubt, keep real form submission mapped only to `button.form_button_click`.

## Common Animation Types

| Type | Use |
| --- | --- |
| `offset` | sliding panels, card movement |
| `size` | grow/shrink, pulse, progress illusion |
| `alpha` | fade in/out |
| `uv` / sprite-style values | texture animation when supported by the target screen |

## Replay Checklist

If an animation plays once and then stops:

1. Does it have `play_event`?
2. Is `resettable` true?
3. Is the event emitted again?
4. Is the animated control still alive?
5. Is another state change replacing the control before the animation plays?
