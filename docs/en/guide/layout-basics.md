# Layout Basics

Bedrock JSON UI layout is controlled mostly by:

- `size`
- `anchor_from`
- `anchor_to`
- `offset`
- parent-child control structure

## Size

```json
"size": [120, 40]
```

This means width `120` and height `40`.

You may also see strings:

```json
"size": ["100%", "100%"]
```

That means use the full size of the parent.

## Anchors

```json
"anchor_from": "center",
"anchor_to": "center"
```

Anchors decide which point of this control is attached to which point of its parent.

## Offset

```json
"offset": [0, -20]
```

Offset moves the control after anchoring. Positive `x` moves right. Positive `y` moves down.

## Parent size matters

A child control is positioned relative to its parent. If your parent is `[0, 0]`, `"100%"` children can behave strangely.

## Practical rule

For beginner work, give every important panel a stable size:

```json
{
  "type": "panel",
  "size": [300, 180],
  "anchor_from": "center",
  "anchor_to": "center"
}
```

After the structure works, make it responsive.
