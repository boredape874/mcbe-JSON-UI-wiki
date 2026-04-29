# What Is JSON UI?

Minecraft Bedrock JSON UI is the client-side UI system used by resource packs to describe screens, panels, labels, images, buttons, forms, HUD widgets, and other interface pieces.

It is called JSON UI because most of the interface is written as JSON objects.

```json
{
  "type": "label",
  "text": "Hello JSON UI",
  "size": [120, 20],
  "anchor_from": "center",
  "anchor_to": "center"
}
```

That small object says: create a label, put text in it, give it a size, and anchor it to the center.

## The core idea

JSON UI is a tree of controls.

<img class="jsonui-diagram" src="/assets/diagrams/control-tree.svg" alt="JSON UI control tree">

A screen contains controls. Controls may contain more controls. For example:

- a screen panel contains a background image
- the same panel contains a button
- the button contains a text label
- the button can change its child control when hovered or pressed

## What JSON UI can change

JSON UI can customize many Bedrock client interfaces:

- HUD overlays
- chat panels
- title and actionbar displays
- server forms
- inventory-like screens
- start screen and pause screen pieces
- custom visual layers driven by scoreboards, titles, or forms

## What JSON UI cannot do by itself

JSON UI is not a scripting language.

It cannot directly:

- run server commands
- store player data
- detect block events
- create gameplay logic

For gameplay logic, use a server, behavior pack script, or PMMP plugin. JSON UI handles the client-side display.

## Beginner rule

Think of JSON UI as:

> Resource-pack files that tell the Bedrock client how a screen should look and react to known UI data.

That mental model prevents most early confusion.
