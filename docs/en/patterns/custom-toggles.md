# Custom Toggles

Custom toggles are useful when a control needs persistent on/off state, different checked/unchecked visuals, or an animated switch effect.

<img class="jsonui-diagram" src="/assets/diagrams/toggle-illusion.svg" alt="Animated toggle illusion">

## Choose The Right Control

Use a real toggle when you need persistent state:

- settings on/off
- selected tab
- visibility state
- radio-like menu state

Use a button when you only need a click event:

- play an animation
- move to next page
- pulse a card
- submit a server form button

Do not force `common.toggle` to act like a generic event emitter. `toggle_on_button` and `toggle_off_button` are events the toggle listens to. They are not a reliable output API for unrelated controls.

## Simple Press Animation

For a click-driven animation, a button with a custom pressed event is usually simpler.

```json
{
  "type": "button",
  "size": [40, 20],
  "button_mappings": [
    {
      "from_button_id": "button.menu_select",
      "to_button_id": "button.my_feature.play",
      "mapping_type": "pressed"
    }
  ]
}
```

Then the animated child listens to that event:

```json
{
  "anim_type": "offset",
  "duration": 0.25,
  "from": [16, 0],
  "to": [0, 0],
  "play_event": "button.my_feature.play",
  "resettable": true
}
```

## Animated Toggle Illusion

For an on/off animation, split the problem:

- real toggle owns `#toggle_state`
- binding converts state into `#collection_length`
- factory creates an entry child or exit child
- entry/exit child plays animation when created

This is called an illusion because the toggle itself is not animating. The toggle changes state, then newly created child controls animate.

## Radio Toggle State

For multi-step UI such as page 1 -> page 2 -> page 3, use a radio-toggle group or hidden state toggles. One toggle is only on/off; it is not a good three-state controller.

## Hover And Focus

Hover and focus visuals come from the child controls assigned to:

- `checked_control`
- `unchecked_control`
- `checked_hover_control`
- `unchecked_hover_control`
- locked variants if used

If you want a different focus border, replace the visual state controls. Do not search for a single magic focus-color property.

## Debugging

If the toggle animates only once:

1. Check whether the animated control is being recreated.
2. Add `resettable: true` to replayable animations.
3. Keep the animated wrapper stable when using `play_event`.
4. Split state events from motion events.
