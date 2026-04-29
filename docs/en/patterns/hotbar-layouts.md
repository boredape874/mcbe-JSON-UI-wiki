# Hotbar Layouts

Hotbar layout work changes how the player sees quick slots and related HUD controls.

## Common Shapes

- compact horizontal hotbar
- vertical side hotbar
- circular or radial hotbar illusion
- custom selected-slot frame
- extra status cluster near hotbar

## Practical Rule

Hotbar UI must not block gameplay. It should be readable while moving and fighting.

## Layout Advice

Use stable slot size, fixed gaps, and clear selected-state texture. Do not resize slots on hover if it shifts the whole bar.

## Risk

Hotbar files overlap with core HUD behavior. Keep a backup and test with touch, controller, and keyboard/mouse if the pack targets multiple devices.
