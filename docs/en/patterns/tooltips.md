# Tooltips

Tooltips are small contextual panels that appear near hovered or focused controls.

## Uses

- item descriptions
- locked requirement hints
- skill node details
- button descriptions
- short error messages

## Pattern Shape

```text
hovered control
        -> hover/focus state
        -> tooltip panel visible
        -> label binds description text
```

## Text Fit

Give every tooltip label an explicit size. Long text should wrap or be trimmed deliberately. Do not let a tooltip resize the whole layout.

## Animated Tooltip

A tooltip can fade or slide in from a hover event. Keep the tooltip panel stable and animate its child content.
