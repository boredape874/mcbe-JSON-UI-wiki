# Troubleshooting

## The screen does not appear

Check:

1. Is the file listed in `_ui_defs.json`?
2. Is the namespace correct?
3. Are you editing the correct screen?
4. Did Minecraft cache an old resource pack version?

## Texture is missing

Check:

1. The file exists.
2. The path uses no `.png` extension in JSON UI.
3. The path starts from the resource pack root.

Example:

```json
"texture": "textures/ui/my_icon"
```

## `Type not specified`

This usually means the control has no `"type"` and the `@namespace.template` reference failed.

Example of a broken reference:

```json
"button@my_pack.unknown_template": {}
```

Fix the namespace, register the file, or define the template.

## `Dangling number`

Bedrock expected a size string like `"20px"` or `"50%"`, but got an unsupported bare number in a string-like context.

Use direct numbers or unit strings consistently:

```json
"size": [20, 40]
"size": ["20px", "40px"]
```
