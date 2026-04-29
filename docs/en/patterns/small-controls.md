# Small Controls

Small controls include sliders, step sliders, small buttons, checkbox-like toggles, icon buttons, and compact fields.

## Button

Use a button when the control performs one command.

```text
press -> event -> action
```

## Toggle

Use a toggle when the control owns persistent on/off state.

```text
checked / unchecked -> different visual state
```

## Slider

Use a slider or step slider when the player chooses a numeric or option value. Keep the server response order documented if the slider is inside a custom form.

## Icon Button

Use icon buttons for compact commands such as close, back, next, previous, refresh, and search clear.

## Sizing

Small controls still need stable touch targets. Do not make a control visually tiny if it must be used on mobile.
