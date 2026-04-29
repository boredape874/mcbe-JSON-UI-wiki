# Server Contract

A custom server form works only when the server code and the resource pack agree on the same contract.

<img class="jsonui-diagram" src="/assets/diagrams/server-contract.svg" alt="Server form contract diagram">

The contract should answer four questions:

1. Which UI route should open?
2. Which form type is used?
3. What does each button index mean?
4. What does each custom-form field index mean?

## Route Contract

Use a stable title token. Do not route by a title that may be translated or edited for display.

```text
[shop] Main Menu
[admin] Console
[traits] Skill Tree
```

The player-facing title can be redrawn by JSON UI. The token exists for routing, not for presentation.

## Button Index Contract

Action forms return a button index. Keep a small table in your server code or documentation.

```text
title: [shop] Main Menu
button 0: open warps
button 1: open island menu
button 2: open shop menu
```

If JSON UI changes the visual order, the server still receives the original collection index. Do not make the visual order disagree with the server order unless you are deliberately mapping it.

## Custom-Form Field Contract

Custom forms return values by field order.

```text
title: [admin] Execute
field 0: admin code text
field 1: execute-to sector dropdown
field 2: execute-from void dropdown
```

If the server script changes field order, update the UI documentation at the same time.

## PMMP Notes

For PMMP form libraries, keep the title token and the button order near the code that handles the response. The resource pack cannot fix a response handler that expects a different index.

## Script API Notes

For behavior-pack scripts, beta APIs can change. Keep the UI contract separate from API syntax. The contract is stable even if the form builder call changes.

## Recommended Naming

Use names that describe the feature and route:

```text
[shop] Main Menu
[shop:category] Blocks
[admin:execute] Console
[traits:combat] Combat Tree
```

Avoid vague tokens such as `[menu]` when the pack will grow.
